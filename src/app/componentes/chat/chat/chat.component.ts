import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { UsuarioService } from '../../../services/usuario.service';
import { ViewChild, ElementRef } from '@angular/core';
import { Firestore, addDoc, collection, query, orderBy, onSnapshot, QuerySnapshot, QueryDocumentSnapshot } from '@angular/fire/firestore';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [
    MatCardModule,
    MatInputModule,
    MatIconModule,
    CommonModule,
    MatButtonModule,
    FormsModule
  ],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent implements OnInit{

  mostrarChat: boolean = false;
  nuevoMensaje: string = '';
  mensajes: any[] = [];
  @ViewChild('mensajeContainer', {static: false}) mensajeContainer!: ElementRef;

  constructor(
    public usuarioService: UsuarioService,
    private firestore: Firestore
  ){}

  ngOnInit(): void {
      this.obtenerMensajesDb();
      setTimeout(() => {
        this.scrollAlUltimoMensaj();
      });
  }

  abrirConScroll(){
    this.mostrarChat = true;
    setTimeout(() => {
      this.scrollAlUltimoMensaj();
    });
  }

  enviarMensaje(){
    if (this.nuevoMensaje != '') {
      const hora = new Date();
      let col = collection(this.firestore, 'mensajes');
      addDoc(col, { usuario: this.usuarioService.getEmailLogeado(), mensaje: this.nuevoMensaje, fecha: hora});
      this.mensajes = [];
      this.obtenerMensajesDb();
      this.nuevoMensaje = '';
    }
  }

  scrollAlUltimoMensaj(){
    try {
      this.mensajeContainer.nativeElement.scrollTop = this.mensajeContainer.nativeElement.scrollHeight;
    } catch(err) { }
  }

  obtenerMensajesDb() {
    let col = collection(this.firestore, 'mensajes');
    const mensajesAux = query(col, orderBy('fecha', 'asc'));
    onSnapshot(mensajesAux, (snapshot: QuerySnapshot) => {
      this.mensajes = [];
      snapshot.forEach((doc: QueryDocumentSnapshot) => {
        this.mensajes.push({
          usuario: doc.data()['usuario'],
          mensaje: doc.data()['mensaje'],
          hora: doc.data()['fecha'].toDate()
        });
      });
      setTimeout(() => {
        this.scrollAlUltimoMensaj();
      });
    });
  }
}
