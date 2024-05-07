import { Component, OnInit} from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { UsuarioService } from '../../services/usuario.service';
import {MatMenuModule} from '@angular/material/menu';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    RouterLink,
    MatButtonModule,
    MatIconModule,
    CommonModule,
    MatMenuModule,
    FormsModule
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  constructor(
    private router: Router,
    public usuarioService: UsuarioService
  ){}

  logOut(){
    this.usuarioService.logOut()
    .then(response =>{ 
      if (typeof localStorage !== 'undefined'){
        localStorage.setItem('email', JSON.stringify(''));
      }
      this.router.navigate(['/login']);
     })
    .catch(error => {console.log(error)})
  }
}
