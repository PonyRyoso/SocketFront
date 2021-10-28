import { Injectable, OnInit } from '@angular/core';
import { Socket     } from 'ngx-socket-io';
import { Document      } from '../models/document.model';
import { SweelService } from './sweel.service';


@Injectable({
  providedIn: 'root'
})
export class ClientSocketService implements OnInit {

  public socketStatus = false;

  constructor(private socket: Socket, 
       private sweel: SweelService ) {
         
        this.checkStatus();
  }
  
  ngOnInit() {
    this.checkStatus();
  }

//FUNCION DE ESCUCHA DE SOCKETS
   checkStatus(){
  //ESCUCHAR SOCKET DE CONEXION
    this.socket.on('connect', ()=>{
      console.log("Conectado al Servidor");
      this.sweel.mensajeSimple("","Conectado al Servidor","success")
      this.socketStatus = true;
    });

    //ESCUCHAR SOCKET DE DESCONEXION
    this.socket.on('disconnect', ()=> {
    console.log("Desconectado del Servidor");
      this.sweel.mensajeSimple("","Desconectado del Servidor","error");
      this.socketStatus = false;
    });

    // ESCUCHAR SOCKET DE NOTIFICACION
    this.socket.on('notification', data=>{
     if(data){
      console.log(data)
      return this.sweel.mensajeSimple("sala", data.detail,"success");
     }
    });
   }

   //EVENTO EMIT PARA QUE ESCUCHE EL BACKEND
    emit(evento:string, payload?: any, callback?:Function ){
    this.socket.emit(evento, payload, callback);
  }
  //EVENTO ON
    ON(evento:string, payload?: any, callback?: Function){
    this.socket.on(evento,callback);
  }



  PruebaLogin( nombre:string, room:string){
    this.emit('login', {name: nombre, room:room}, error=>{
        if ( error ){
          console.log(error);
       return this.sweel.mensajeSimple("error",error.toString(),"error");
        }else{
      // localStorage.setItem("usuarios", JSON.stringify(nombre))
     return this.sweel.mensajeSimple("Ingresado", nombre.toString(),"success");
        }
      })
  }
  }

