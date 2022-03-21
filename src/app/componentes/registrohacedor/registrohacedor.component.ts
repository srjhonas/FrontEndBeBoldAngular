import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrohacedor',
  templateUrl: './registrohacedor.component.html',
  styleUrls: ['./registrohacedor.component.css']
})
export class RegistrohacedorComponent implements OnInit {

  constructor(private objhttp:HttpClient, private router:Router) { }
  res: any;
  contenido:any;
  urlAPI:string = "http://localhost:8080/api/hacedores"

  nombreHacedor!: string;
  emailHacedor!:string ;  
  telefonoHacedor!:string;  
  passwordHacedor!:string;  
  //tipoUsuario :string = "Hacedor";
  codepost!:number;

  insertarHacedor() {
    this.objhttp.post(this.urlAPI,
      {
        "email_hacedor": this.emailHacedor,
        "nombre_hacedor": this.nombreHacedor,
        "password_hacedor": this.passwordHacedor,
        "telefono_hacedor": this.telefonoHacedor,
        "tipo_usuario": "Hacedor"
      }, {
      observe: 'response'
    }).subscribe(
      (response: any) => {

        this.codepost = response.status;
        this.emailHacedor = "";
        this.nombreHacedor= "";
        this.passwordHacedor= "";
        this.telefonoHacedor= "";
        
      }
    );
    this.router.navigate(['/HomeHacedor'])

  }
  ngOnInit(): void {
  }

}
