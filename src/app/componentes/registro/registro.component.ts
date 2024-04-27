import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import { CommonModule } from '@angular/common';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    CommonModule
  ],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {

  email: string = '';
  password: string = '';
  mailYaExistente: boolean = false;
  contraInvalida: boolean = false;
  mailInvalido: boolean = false;

  constructor(
    private router: Router,
    private usuarioService: UsuarioService,
    private firestore: Firestore
  ){ }

  registro(){
    this.mailYaExistente = false;
    this.mailInvalido = false;
    this.contraInvalida = false;
    
    this.usuarioService.registro(this.email, this.password)
    .then(response =>{
      let col = collection(this.firestore, 'ingresos');
      addDoc(col, { fecha: new Date(), "user": this.email})
      this.usuarioService.logeado = true;
      this.router.navigate(['/']);
    })
    .catch(error => {
      console.log(error);
      if (error.code === 'auth/email-already-in-use') {
        this.mailYaExistente = true;
      } else if (error.code === 'auth/weak-password') {
        this.contraInvalida = true;
      } else if (error.code === 'auth/invalid-email'){
        this.mailInvalido = true;
      }
    });
  }
}
