import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  Estado: number = 0;
  
  constructor(public dataService:DataService) { }
  actualizarNavBar(){
    if(this.dataService.tipoUsuario == "Cliente"){
      this.Estado = 1
    }else if(this.dataService.tipoUsuario == "Hacedor"){
      this.Estado = 2
    }else{
      this.Estado = 3
    }
  }

  ngOnInit(): void {
  
  }

}
