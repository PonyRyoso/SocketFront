import { Injectable } from '@angular/core';
import Swal from "sweetalert2";

type opcSweet = "success" | "error" | "warning" | "info" | "question";


@Injectable({
  providedIn: 'root'
})
export class SweelService {
  private buttonPrincipalColor:string='#563d7c';
  private buttonActualizarColor:string='#563d7c';
  private buttonEliminarColor:string='#';


  constructor() {    
    this.buttonPrincipalColor='#563d7c';
  this.buttonActualizarColor='#1e88e5';
  this.buttonEliminarColor='#d33';
 
}
 //SA normal
 mensajeSimple(titulo: string, texto: string, tipo: opcSweet) {
  Swal.fire(titulo.toUpperCase(), texto.toUpperCase(), tipo,);
}
}
