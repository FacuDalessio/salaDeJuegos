import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { PalabrasService } from '../../services/palabras/palabras.service';

@Component({
  selector: 'app-ahorcado',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    FormsModule,
    MatInputModule
  ],
  templateUrl: './ahorcado.component.html',
  styleUrl: './ahorcado.component.css'
})
export class AhorcadoComponent {

  letras: string[] = [
    'A','B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
    'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S',
    'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
  ]
  img: string = '../../../assets/ahorcado/img0.png';
  palabra: string = '';
  palabraAux: string = '';
  errores: number = 0;
  letrasEncontradas: string[] = [];
  perdio: boolean = false;
  gano: boolean = false;
  aciertos: number = 0;
  letrasSeleccionadas: boolean[] = [];
  escribirPalabraInput: boolean = false;
  palabrasAlAzar: string[] = [];

  constructor(
    private palabrasService: PalabrasService
  ){
    this.palabraAlAzar();
  }

  eleccionLetra(letra: string){
    if(this.palabra.includes(letra)){
      for (let i = 0; i < this.palabra.length; i++) {
        if (this.palabra[i] == letra) {
          this.letrasEncontradas[i] = letra;
          this.aciertos++;
        }
      }
      if (this.aciertos == this.palabra.length) {
        this.gano = true;
      }
    }else{
      this.errores++;
      this.cambiarImagen();
    }

    for (let i = 0; i < this.letras.length; i++) {
      if (this.letras[i] == letra) {
        this.letrasSeleccionadas[i] = true;
      }
    }
  }

  palabraAlAzar(){
    this.palabrasService.getPalabra().subscribe(result => {
      this.palabra = result[0].toUpperCase();
      this.palabra = this.palabra.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      console.log(this.palabra);
      this.inicializarPalabra();
      this.inicializarLetrasSeleccionadas();
    });
  }

  reiniciar(){
    this.errores = 0;
    this.aciertos = 0;
    this.letrasEncontradas = [];
    this.cambiarImagen();
    this.perdio = false;
    this.gano = false;
    this.letrasSeleccionadas = [];
    this.escribirPalabraInput = false;
    this.palabraAux = '';
    this.palabraAlAzar();
  }

  cambiarImagen(){
    switch(this.errores){
      case 0:
        this.img = '../../../assets/ahorcado/img0.png';
        break;
      case 1:
          this.img = '../../../assets/ahorcado/img1.png';
          break;
      case 2:
        this.img = '../../../assets/ahorcado/img2.png';
        break;
      case 3:
        this.img = '../../../assets/ahorcado/img3.png';
        break;
      case 4:
        this.img = '../../../assets/ahorcado/img4.png';
        break;
      case 5:
        this.img = '../../../assets/ahorcado/img5.png';
        break;
      case 6:
        this.img = '../../../assets/ahorcado/img6.png';
        break;
      case 7:
        this.img = '../../../assets/ahorcado/img7.png';
        this.perdio = true;
        break;
    }
  }

  inicializarPalabra(){
    for (let i = 0; i < this.palabra.length; i++) {
      this.letrasEncontradas.push('_');
    }
  }

  inicializarLetrasSeleccionadas(){
    for (let i = 0; i < this.letras.length; i++) {
      this.letrasSeleccionadas.push(false);
    }
  }
}
