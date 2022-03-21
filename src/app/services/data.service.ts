import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  idUsuario:string = "Sin Nombre..."
  nombreUsuario:string = "Sin Nombre..."
  emailUsuario:string = "Sin Nombre..."
  telefonoUsuario:string = "Sin Nombre..."
  tipoUsuario:string = "Sin Nombre..."
  
  constructor() { }
}
