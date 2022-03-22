import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-confighacedor',
  templateUrl: './confighacedor.component.html',
  styleUrls: ['./confighacedor.component.css'],
})
export class ConfighacedorComponent implements OnInit {
  constructor(private objetohttp: HttpClient,public dataService: DataService) {}
  //Variables
  servicioAgregar!: any;
  valorXServicio: number = 0;
  DeptoSeleccionado!: any;
  CiudadSeleccionada!: any;

    
  //Array de Departamentos
  Depto = Array(    'Amazonas',    'Antioquia',    'Arauca',    'San Andres, Providencia y Sta Catalina',
    'Atlantico',    'Bogota D.C.',    'Bolivar',    'Boyaca',    'Caldas',    'Caqueta',    'Casanare',    'Cauca',
    'Cesar',    'Choco',    'Cordoba',    'Cundinamarca',    'Guainia',    'Guaviare',    'Huila',    'La Guajira',
    'Magdalena',    'Meta',    'Narino',    'Norte de Santander',    'Putumayo',    'Quindio',    'Risaralda',    'Santander',
    'Sucre',    'Tolima',    'Valle del Cauca',    'Vichada'
  );

// llamado API para traer ciudades de acuerdo al Departamento seleccionado
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

  // Metodo para llamar al API para cargar Servicios por Hacedor
  res3: any;
  contenido3: any;
  urlapiGET3: string = 'http://localhost:8080/api/ServicioXHacedor';
  codepost!: number;

  AdicionarServicio() {
    let variable = this.servicioAgregar;
    let datostraidos = Array();
    let indicedef = 0;
    for (let dddato of this.contenido) {
      datostraidos.push(dddato);
    }
    for (let i = 0; i < datostraidos.length; i++) {
      let variable1 = datostraidos[i].nombre_tipo_servicio;
      
      if (variable1 == variable) {
        indicedef = i;
        break;
      }
    }
    let idTipoServicio = datostraidos[indicedef].id_tipo_servicio;

    //lamado API
    this.objetohttp.post(this.urlapiGET3,
      {
        "id_hacedor": this.dataService.idUsuario,
        "id_tipo_servicio": idTipoServicio,
        "precio_esperado": this.valorXServicio

      }, {
      observe: 'response'
    }).subscribe(
      (response: any) => {
        this.codepost = response.status;
        this.servicioAgregar = "";
        this.valorXServicio = 0;
        
      }
    );
  
  }

  //Registrar Nueva Ciudad de Cobertura

  urlapiGET4: string = 'http://localhost:8080/api/CiudadXHacedor';
  codepostCity!: number;
  AdicionarCiudad() {
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

    //lamado API
    this.objetohttp.post(this.urlapiGET4,
      {
        "id_hacedor": this.dataService.idUsuario,
        "id_ciudad": idCity,
      }, {
      observe: 'response'
    }).subscribe(
      (response: any) => {
        this.codepostCity = response.status;
        this.CiudadSeleccionada = "";
        
        
      }
    );
    
  }

  //Cargar el listado de Ciudades de cobertura que tiene un Hacedor
  res5: any;
  contenido5: any;
  urlapiGET5: string = 'http://localhost:8080/api/CiudadXHacedor/';
  
  cargarCiudades(){
    try {
      this.res5 = this.objetohttp.get(this.urlapiGET5+this.dataService.idUsuario);
      this.res5.subscribe((datos: any[]) => {
        this.contenido5 = datos;
        
      
      });
    } catch (e) {
      console.error('BK DOWN');
      this.contenido5 = [];
    }
  }

  //Cargar el listado de Servicios que presta un Hacedor
  res6: any;
  contenido6: any;
  urlapiGET6: string = 'http://localhost:8080/api/ServicioXHacedor/';
  cargarServiciosHacedor(){
    try {
      this.res6 = this.objetohttp.get(this.urlapiGET6+this.dataService.idUsuario);
      this.res6.subscribe((datos: any[]) => {
        this.contenido6 = datos;
        
      
      });
    } catch (e) {
      console.error('BK DOWN');
      this.contenido6 = [];
    }
  }

//llamado1 API consultar tipos de Servicio
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

//    try {
//      this.res5 = this.objetohttp.get(this.urlapiGET5+this.dataService.idUsuario);
//     this.res5.subscribe((datos: any[]) => {
//        this.contenido5 = datos;
//        console.log(this.contenido5);
//      });
//    } catch (e) {
//      console.error('BK DOWN');
//      this.contenido5 = [];
//    }

  }
}
