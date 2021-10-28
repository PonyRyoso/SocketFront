import { Component, OnInit } from '@angular/core';
import { ClientSocketService } from '../services/client-socket.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-lista-documentos',
  templateUrl: './lista-documentos.component.html',
  styleUrls: ['./lista-documentos.component.css']
})
export class ListaDocumentosComponent{

  constructor( private documentService: ClientSocketService ) { }

 

// AGREGAR A LA SALA 1
  Agregar(){
    this.documentService.PruebaLogin(uuidv4(),"UsuariosExternos");
  }
  // AGREGAR A LA SALA 2
  Agregar2(){
    this.documentService.PruebaLogin(uuidv4(),"Medicos");
  }
 
}
