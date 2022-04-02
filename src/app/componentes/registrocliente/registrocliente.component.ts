import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrocliente',
  templateUrl: './registrocliente.component.html',
  styleUrls: ['./registrocliente.component.css']
})
export class RegistroclienteComponent implements OnInit {

  constructor(private objetohttp: HttpClient, private router: Router) { }
  res: any;
  contenido:any;
  urlAPI:string = "http://localhost:8080/api/clientes"

  nombreCliente!: string;
  emailCliente!:string ;  
  telefonoCliente!:string;  
  passwordCliente!:string;  
  //tipoUsuario :string = "Cliente";
  codepost!:number;

  insertarCliente() {
    this.objetohttp.post(this.urlAPI,
      {
        "emailCliente": this.emailCliente,
        "nombre_cliente": this.nombreCliente,
        "password_cliente": this.passwordCliente,
        "telefono_cliente": this.telefonoCliente,
        "tipo_usuario": "Cliente"
      }, {
      observe: 'response'
    }).subscribe(
      (response: any) => {

        this.codepost = response.status;
        this.emailCliente = "";
        this.nombreCliente= "";
        this.passwordCliente= "";
        this.telefonoCliente= "";
        
      }
    );

    this.router.navigate(['/Home'])
  }


  ngOnInit(): void {

    


  }

}
