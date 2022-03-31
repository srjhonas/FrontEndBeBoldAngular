import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  message!: string;
  editMessage!: string;

  Estado: number = 0;
  
  constructor(public dataService:DataService) { }


  ngOnInit(): void {

    this.dataService.customMessage.subscribe(msg => this.message = msg)

  
  }

}
