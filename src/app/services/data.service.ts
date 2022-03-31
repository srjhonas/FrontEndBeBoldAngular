import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  //nuevo
  private message = new BehaviorSubject<string>('En espera de un nombre');
  public customMessage = this.message.asObservable();
  //nuevo
  idUsuario:string = "Sin Nombre..."
  nombreUsuario:string = "Sin Nombre..."
  emailUsuario:string = "Sin Nombre..."
  telefonoUsuario:string = "Sin Nombre..."
  tipoUsuario:string = "Sin Nombre..."
  Perfil:number = 0;
  constructor() { }
  //nuevo
  public changeMessage(msg: string): void {
    this.message.next(msg);
  }
  //nuevo

}
