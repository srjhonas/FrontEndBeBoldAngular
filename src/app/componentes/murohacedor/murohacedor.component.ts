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
