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
  constructor(private objetohttp: HttpClient, private dataService: DataService, private router: Router) {}
  perfilSeleccionado: string = '';
  mailUser: string = '';
  passUser: string = '';
  DatoIdUsuario: string = '';
  DatoNombreUsuario: string = '';
  DatoEmailUsuario: string = '';
  DatoTelefonoUsuario: string = '';
  DatoTipoUsuario: string = '';

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
    if(this.perfilSeleccionado == "Cliente"){
      try {
        this.res = this.objetohttp.get(this.urlapiClientes + this.mailUser);
        this.res.subscribe((datos: any[]) => {
          this.contenido = datos;
        });
      } catch (e) {
        console.error('BK DOWN');
        this.contenido = [];
      }
      setTimeout(() => {
        
        let passcorrecto = this.contenido[0].password_cliente;
        
        if (this.passUser === passcorrecto) {
          
          this.router.navigate(['/HomeCliente']);
        } else {
          
          window.location.reload();
        }
        this.dataService.idUsuario = this.contenido[0].id_cliente;
        this.dataService.nombreUsuario = this.contenido[0].nombre_cliente;
        this.dataService.emailUsuario = this.contenido[0].emailCliente;
        this.dataService.telefonoUsuario = this.contenido[0].telefono_cliente;
        this.dataService.tipoUsuario = this.contenido[0].tipo_usuario;
        if(this.dataService.tipoUsuario == "Cliente"){
          this.dataService.Perfil = 1
        }else if(this.dataService.tipoUsuario == "Hacedor"){
          this.dataService.Perfil = 2
        }else{
          this.dataService.Perfil = 3
        }
        

      }, 500);
    }else{
      try {
        this.res = this.objetohttp.get(this.urlapiHacedores + this.mailUser);
        this.res.subscribe((datos: any[]) => {
          this.contenido = datos;
        });
      } catch (e) {
        console.error('BK DOWN');
        this.contenido = [];
      }
      setTimeout(() => {
        
        let passcorrecto = this.contenido[0].password_hacedor;
        
        if (this.passUser === passcorrecto) {
          
          this.router.navigate(['/HomeHacedor']);
        } else {
          
          window.location.reload();
        }
        this.dataService.idUsuario = this.contenido[0].id_hacedor;
        this.dataService.nombreUsuario = this.contenido[0].nombre_hacedor;
        this.dataService.emailUsuario = this.contenido[0].emailhacedor;
        this.dataService.telefonoUsuario = this.contenido[0].telefono_hacedor;
        this.dataService.tipoUsuario = this.contenido[0].tipo_usuario;

        if(this.dataService.tipoUsuario == "Cliente"){
          this.dataService.Perfil = 1
        }else if(this.dataService.tipoUsuario == "Hacedor"){
          this.dataService.Perfil = 2
        }else{
          this.dataService.Perfil = 3
        }
       

      }, 500);
    }
   
    

  }

  ngOnInit(): void {}
}
