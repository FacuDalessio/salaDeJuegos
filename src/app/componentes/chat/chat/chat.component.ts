import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { UsuarioService } from '../../../services/usuario.service';
import { ViewChild, ElementRef } from '@angular/core';

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
export class ChatComponent {

  mostrarChat: boolean = false;
  nuevoMensaje: string = '';
  mensajes: any[] = [];
  @ViewChild('mensajeContainer', {static: false}) mensajeContainer!: ElementRef;

  constructor(
    public usuarioService: UsuarioService
  ){}

  enviarMensaje(){
    if (this.nuevoMensaje != '') {
      this.mensajes.push({
        usuario: this.usuarioService.getEmailLogeado(),
        mensaje: this.nuevoMensaje,
        hora: new Date()
      });
      this.nuevoMensaje = '';
      setTimeout(() => {
        this.scrollAlUltimoMensaj();
    });
    }
  }

  scrollAlUltimoMensaj(){
    try {
      this.mensajeContainer.nativeElement.scrollTop = this.mensajeContainer.nativeElement.scrollHeight;
    } catch(err) { }
  }
}
