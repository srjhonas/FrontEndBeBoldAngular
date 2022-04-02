import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-solicitarservicio',
  templateUrl: './solicitarservicio.component.html',
  styleUrls: ['./solicitarservicio.component.css'],
})
export class SolicitarservicioComponent implements OnInit {
  constructor(
    private objetohttp: HttpClient,
    public dataService: DataService,
    private router:Router
  ) {}

  Depto = Array(
    'Amazonas',
    'Antioquia',
    'Arauca',
    'San Andres, Providencia y Sta Catalina',
    'Atlantico',
    'Bogota D.C.',
    'Bolivar',
    'Boyaca',
    'Caldas',
    'Caqueta',
    'Casanare',
    'Cauca',
    'Cesar',
    'Choco',
    'Cordoba',
    'Cundinamarca',
    'Guainia',
    'Guaviare',
    'Huila',
    'La Guajira',
    'Magdalena',
    'Meta',
    'Narino',
    'Norte de Santander',
    'Putumayo',
    'Quindio',
    'Risaralda',
    'Santander',
    'Sucre',
    'Tolima',
    'Valle del Cauca',
    'Vichada'
  );

  //Variables
  DeptoSeleccionado!: any;
  CiudadSeleccionada!: any;
  DireccionServicio!: any;
  BarrioServicio!: any;
  ServicioSeleccionado!: any;
  ValorOfrecido!: number;
  Observaciones!: any;

  res2: any;
  contenido2: any;
  urlapiGET2: string = 'http://localhost:8080/api/ciudades/';

  FiltrarXDpto() {
    try {
      this.res2 = this.objetohttp.get(this.urlapiGET2 + this.DeptoSeleccionado);
      this.res2.subscribe((datos2: any[]) => {
        this.contenido2 = datos2;
        
      });
    } catch (e) {
      console.error('BK DOWN');
      this.contenido2 = [];
    }
  }

  urlapiPOST: string = 'http://localhost:8080/api/SolicitudServicio';
  codepost!: number;

  resNumSolicitud: any;
  contenidoNumSolicitud: any;
  urlapiGETNumSolicitud: string = 'http://localhost:8080/api/numSolicitud';
  numSolServicio!: number;

  resAptos: any;
  contenidoAptos: any;
  urlapiGETAptos: string = 'http://localhost:8080/api/HacedoresAptos/';

  urlapiPOSTListado: string = 'http://localhost:8080/api/ServicioHacedorApto';
  codepostListado!: number;

  CrearSolicitudServicio() {
    //definiendo el id del tipo de servicio
    let variableServ = this.ServicioSeleccionado;
    let datostraidosServ = Array();
    let indicedefServ = 0;
    for (let dddato of this.contenido) {
      datostraidosServ.push(dddato);
    }
    for (let i = 0; i < datostraidosServ.length; i++) {
      let variableServ2 = datostraidosServ[i].nombre_tipo_servicio;

      if (variableServ == variableServ2) {
        indicedefServ = i;
        break;
      }
    }
    let idTipoServicio = datostraidosServ[indicedefServ].id_tipo_servicio;

    //definiendo el id de la ciudad
    let variableCity = this.CiudadSeleccionada;
    let datostraidosCity = Array();
    let indicedefCity = 0;
    for (let dddato2 of this.contenido2) {
      datostraidosCity.push(dddato2);
    }
    for (let i = 0; i < datostraidosCity.length; i++) {
      let variableCity2 = datostraidosCity[i].nombre_ciudad;
     
      if (variableCity == variableCity2) {
        indicedefCity = i;
        break;
      }
    }
    let idCity = datostraidosCity[indicedefCity].id_ciudad;

    //Creando la solicitud de servicio en Base de Datos
    this.objetohttp
      .post(
        this.urlapiPOST,
        {
          id_hacedor: this.dataService.idUsuario,

          ciudad_servicio: idCity,
          cliente: this.dataService.idUsuario,
          direccion_sol_serv: this.DireccionServicio,
          estado_sol_serv: 1,
          hacedor: 39,
          observaciones: this.Observaciones,
          tipo_servicio: idTipoServicio,
          valor_ofrecido: this.ValorOfrecido,
        },
        {
          observe: 'response',
        }
      )
      .subscribe((response: any) => {
        this.codepost = response.status;
        /* this.CiudadSeleccionada = "";
        this.DeptoSeleccionado = "";
        this.DireccionServicio = "";
        this.BarrioServicio = "";
        this.ServicioSeleccionado = "";
        this.ValorOfrecido = 0;
        this.Observaciones = ""; */
      });

    //llamar al Back para traer el numero de Solicitud de Servicio
      setTimeout(() => {
      
      try {
        this.resNumSolicitud = this.objetohttp.get(this.urlapiGETNumSolicitud);
        this.resNumSolicitud.subscribe((datosNum: any[]) => {
          this.contenidoNumSolicitud = datosNum;
        
        });
      } catch (e) {
        console.error('BK DOWN');
        this.contenidoNumSolicitud = [];
      }
    }, 1500);
 //asignar variable con el numero de Solicitud de servicio
      setTimeout(() => {
        this.numSolServicio = this.contenidoNumSolicitud;
     
      }, 3000);
      //llamar al Back traer listado de hacedores Aptos

      setTimeout(() => {
    
        try {
          this.resAptos = this.objetohttp.get(
            this.urlapiGETAptos +
              idCity +
              '&' +
              idTipoServicio +
              '&' +
              this.ValorOfrecido
          );
          this.resAptos.subscribe((datosAptos: any[]) => {
            this.contenidoAptos = datosAptos;
            
          });
        } catch (e) {
          console.error('BK DOWN');
          this.contenidoAptos = [];
        }
      }, 4500);
      //Cargar Listado de Hacedores Aptos
      setTimeout(() => {
        let datosAptos2 = Array();
        for (let ddato of this.contenidoAptos) {
          datosAptos2.push(ddato);
        }

      

        for (let x = 0; x < datosAptos2.length; x++) {
          let Apto1 = datosAptos2[x];
        
          this.objetohttp
            .post(
              this.urlapiPOSTListado,
              {
                ciudad_servicio: idCity,
                cliente: this.dataService.idUsuario,
                direccion_sol_serv: this.DireccionServicio,
                estado_sol_serv: 1,
                hacedor: 39,
                hacedor_apto: Apto1[0],
                idsolserv: this.numSolServicio,
                observaciones: this.Observaciones,
                tipo_servicio: idTipoServicio,
                valor_ofrecido: this.ValorOfrecido,
              },
              {
                observe: 'response',
              }
            )
            .subscribe((response: any) => {
              this.codepostListado = response.status;
            });
        }
        //this.router.navigate(['/HomeCliente']);
      }, 6000);
      
  }

  res: any;
  contenido: any;
  urlapiGET: string = 'http://localhost:8080/api/TipoServicio';

  ngOnInit(): void {
    try {
      this.res = this.objetohttp.get(this.urlapiGET);
      this.res.subscribe((datos: any[]) => {
        this.contenido = datos;
        
      });
    } catch (e) {
      console.error('BK DOWN');
      this.contenido = [];
    }
  }
}
