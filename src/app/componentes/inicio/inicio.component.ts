import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {

  message!: string;
  editMessage: string = 'N';

  constructor(private objetohttp: HttpClient, private dataService: DataService, private router: Router) {}
  perfilSeleccionado: string = '';
  mailUser: string = '';
  passUser: string = '';
  DatoIdUsuario: string = '';
  DatoNombreUsuario: string = '';
  DatoEmailUsuario: string = '';
  DatoTelefonoUsuario: string = '';
  DatoTipoUsuario: string = '';
  Acceso: number = 0;

  res: any;
  contenido: any;
  urlapiClientes: string = 'http://localhost:8080/api/clientes/login/';
  urlapiHacedores: string = 'http://localhost:8080/api/hacedores/login/';

  GoRegistroCliente(){
    this.router.navigate(['/RegistroCliente'])
  }

  
  GoRegistroHacedor(){
    this.router.navigate(['/RegistroHacedor'])
  }

  validarLogin() {

    if(this.perfilSeleccionado == "" || this.passUser == "" || this.mailUser == ""){
      this.Acceso = 2;
    }else{
      if(this.perfilSeleccionado == "Cliente"){
        try {
          this.res = this.objetohttp.get(this.urlapiClientes + this.mailUser);
          this.res.subscribe((datos: any[]) => {
            this.contenido = datos;
          });
        } catch (e) {
          console.error(e);
          this.contenido = [];
        }
      }else{
        try {
          this.res = this.objetohttp.get(this.urlapiHacedores + this.mailUser);
          this.res.subscribe((datos: any[]) => {
            this.contenido = datos;
          });
        } catch (e) {
          console.error(e);
          this.contenido = [];
        }
        
      }
      setTimeout(() => {
        if(this.contenido.length == 0){
          this.Acceso = 1;
        }
      }, 500);
  
  
      if(this.perfilSeleccionado == "Cliente"){
        setTimeout(() => {
          let passcorrecto = this.contenido[0].password_cliente;
          if (this.passUser === passcorrecto) {
            this.router.navigate(['/HomeCliente']);
          } else {
            this.Acceso = 1;
          }
          this.dataService.idUsuario = this.contenido[0].id_cliente;
          this.dataService.nombreUsuario = this.contenido[0].nombre_cliente;
          this.dataService.emailUsuario = this.contenido[0].emailCliente;
          this.dataService.telefonoUsuario = this.contenido[0].telefono_cliente;
          this.dataService.tipoUsuario = this.contenido[0].tipo_usuario;
          if(this.dataService.tipoUsuario == "Cliente"){
            this.editMessage = 'C'
            this.changeMessage();
          }else if(this.dataService.tipoUsuario == "Hacedor"){
            this.editMessage = 'H'
            this.changeMessage();
          }else{
            this.editMessage = 'N'
          }
        }, 1000);
    
      }else{
        setTimeout(() => {
          
          let passcorrecto = this.contenido[0].password_hacedor;
          if (this.passUser === passcorrecto) {
            this.router.navigate(['/HomeHacedor']);
          } else {
            this.Acceso = 1;
          }
          this.dataService.idUsuario = this.contenido[0].id_hacedor;
          this.dataService.nombreUsuario = this.contenido[0].nombre_hacedor;
          this.dataService.emailUsuario = this.contenido[0].emailhacedor;
          this.dataService.telefonoUsuario = this.contenido[0].telefono_hacedor;
          this.dataService.tipoUsuario = this.contenido[0].tipo_usuario;
    
          if(this.dataService.tipoUsuario == "Cliente"){
            this.editMessage = 'C'
            this.changeMessage();
          }else if(this.dataService.tipoUsuario == "Hacedor"){
            this.editMessage = 'H'
            this.changeMessage();
          }else{
            this.editMessage = 'N'
          }
        }, 1000); 
      }
    }
  }

  ngOnInit(): void {
    this.dataService.customMessage.subscribe(msg => this.message = msg);
  }

  changeMessage(){
    this.dataService.changeMessage(this.editMessage);
  }
}
