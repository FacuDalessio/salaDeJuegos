import { Component} from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    RouterLink,
    MatButtonModule,
    MatIconModule,
    CommonModule
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
      this.usuarioService.logeado = false;
      this.router.navigate(['/login']);
     })
    .catch(error => {console.log(error)})
  }
}
