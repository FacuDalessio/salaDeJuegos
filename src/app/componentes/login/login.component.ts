import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    RouterOutlet,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RouterLink,
    CommonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  credencialesInvalidas: boolean = false;

  constructor(
    private router: Router,
    private usuarioService: UsuarioService,
    private firestore: Firestore
  ){}

  login(): void{
    this.credencialesInvalidas = false;
    this.usuarioService.login(this.email, this.password)
    .then(response =>{ 
      let col = collection(this.firestore, 'ingresos');
      addDoc(col, { fecha: new Date(), "user": this.email})
      this.usuarioService.logeado = true;
      this.router.navigate(['/']);
    })
    .catch(error => {
      console.log(error);
      this.credencialesInvalidas = true;
    })
  }

  rellenar(){
    this.email = 'email@email.com';
    this.password = '123456';
  }
}
