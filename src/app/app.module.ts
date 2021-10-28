import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";


import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { ClientSocketService } from './services/client-socket.service';
import { environment } from 'src/environments/environment';
import { DocumentComponent } from './document/document.component';
import { ListaDocumentosComponent } from './lista-documentos/lista-documentos.component';


const config: SocketIoConfig = {
   url : environment.ServerSocket,
   options:{
     transports:["polling"]
   }
};

@NgModule({
  declarations: [
    AppComponent,
    DocumentComponent,
    ListaDocumentosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [  
    ClientSocketService,
    ,
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
