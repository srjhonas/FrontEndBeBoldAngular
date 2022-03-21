import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homecliente',
  templateUrl: './homecliente.component.html',
  styleUrls: ['./homecliente.component.css'],
})
export class HomeclienteComponent implements OnInit {
  constructor(private objetohttp: HttpClient, private router:Router) {}

  res: any;
  contenido: any;
  urlapiGET: string = 'http://localhost:8080/api/ListaSolicitudServicio';

  GoRegistrarServicio(){
    this.router.navigate(['/SolicitarServicio']);
  }

 
  ngOnInit(): void {
    try {
      this.res = this.objetohttp.get(this.urlapiGET);
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
