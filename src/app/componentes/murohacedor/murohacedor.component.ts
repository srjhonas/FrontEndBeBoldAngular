import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-murohacedor',
  templateUrl: './murohacedor.component.html',
  styleUrls: ['./murohacedor.component.css']
})
export class MurohacedorComponent implements OnInit {

  constructor(public dataService: DataService, public objetohttp: HttpClient) { }

   
  res: any;
  contenido: any;
  urlapiGET: string = 'http://localhost:8080/api/MuroSolicitudes/';

  urlapiPUT: string = 'http://localhost:8080/api/aceptarSolicitud/';
  codeput!: number;

  urlapiDELETE: string = 'http://localhost:8080/api/HacedoresAptosLimpiar/';
  codedelete!: number;

  AceptarServicio(codigoServicio: number){
    this.objetohttp.put(this.urlapiPUT + codigoServicio,
      {
        "estado_sol_serv": 3,
        "hacedor": this.dataService.idUsuario
        
      }, {
      observe: 'response'
    }).subscribe(
      (response: any) => {
        this.codeput = response.status;
        
      }
    );
    setTimeout(()=>{
      console.log("este es el code put" + this.codeput)
      this.objetohttp.delete(this.urlapiDELETE + codigoServicio, {
        observe: 'response'
      }).subscribe(
        (response: any) => {
  
          this.codedelete = response.status;
          console.log(this.codedelete);
        }
      );
    },500)
    
  }


  ngOnInit(): void {

    try {
      this.res = this.objetohttp.get(this.urlapiGET+this.dataService.idUsuario);
      this.res.subscribe((datos: any[]) => {
        this.contenido = datos;
        console.log(this.contenido);
      });
    } catch (e) {
      console.error('BK DOWN');
      this.contenido = [];
    }

  }

}
