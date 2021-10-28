import { Component } from '@angular/core';
import { ClientSocketService } from './services/client-socket.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent   {

   title = 'SOCKET - CLIENTE';

   constructor( private cliente: ClientSocketService  ){
   
    } 
  }


  

