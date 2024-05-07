import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-mayor-menor',
  standalone: true,
  imports: [
    MatButtonModule,
    CommonModule
  ],
  templateUrl: './mayor-menor.component.html',
  styleUrl: './mayor-menor.component.css'
})
export class MayorMenorComponent {

  correcto: boolean = false;
  incorrecto: boolean = false;
  puntos: number = 0;
  cartas: string[] = [
    '../../../assets/cartas/espada/1.jpg',
    '../../../assets/cartas/espada/2.jpg',
    '../../../assets/cartas/espada/3.jpg',
    '../../../assets/cartas/espada/4.jpg',
    '../../../assets/cartas/espada/5.jpg',
    '../../../assets/cartas/espada/6.jpg',
    '../../../assets/cartas/espada/7.jpg',
    '../../../assets/cartas/espada/8.jpg',
    '../../../assets/cartas/espada/9.jpg',
    '../../../assets/cartas/espada/10.jpg',
    '../../../assets/cartas/espada/11.jpg',
    '../../../assets/cartas/espada/12.jpg',
    '../../../assets/cartas/copa/1.jpg',
    '../../../assets/cartas/copa/2.jpg',
    '../../../assets/cartas/copa/3.jpeg',
    '../../../assets/cartas/copa/4.jpg',
    '../../../assets/cartas/copa/5.jpg',
    '../../../assets/cartas/copa/6.jpg',
    '../../../assets/cartas/copa/7.jpg',
    '../../../assets/cartas/copa/8.jpg',
    '../../../assets/cartas/copa/9.jpg',
    '../../../assets/cartas/copa/10.jpg',
    '../../../assets/cartas/copa/11.jpg',
    '../../../assets/cartas/copa/12.jpg',
    '../../../assets/cartas/oro/1.jpg',
    '../../../assets/cartas/oro/2.jpg',
    '../../../assets/cartas/oro/3.jpg',
    '../../../assets/cartas/oro/4.jpg',
    '../../../assets/cartas/oro/5.jpg',
    '../../../assets/cartas/oro/6.jpeg',
    '../../../assets/cartas/oro/7.jpg',
    '../../../assets/cartas/oro/8.jpg',
    '../../../assets/cartas/oro/9.jpg',
    '../../../assets/cartas/oro/10.jpg',
    '../../../assets/cartas/oro/11.jpg',
    '../../../assets/cartas/oro/12.jpg',
    '../../../assets/cartas/basto/1.jpg',
    '../../../assets/cartas/basto/2.jpg',
    '../../../assets/cartas/basto/3.jpg',
    '../../../assets/cartas/basto/4.jpg',
    '../../../assets/cartas/basto/5.jpg',
    '../../../assets/cartas/basto/6.jpg',
    '../../../assets/cartas/basto/7.jpg',
    '../../../assets/cartas/basto/8.jpg',
    '../../../assets/cartas/basto/9.jpg',
    '../../../assets/cartas/basto/10.jpg',
    '../../../assets/cartas/basto/11.jpg',
    '../../../assets/cartas/basto/12.jpg',
  ]
  cartasRestantes: number = 48;
  valoresCartas: number[] = [];
  cartaAMostrar: string = '';
  cartasMostradas: number[] = [];
  cartaAhora: number = 0;
  cartaSiguiente: number = 0;
  count: number = 0;
  termino: boolean = false;

  constructor(){
    this.inicializarValores();
    this.sacarCarta();
    this.cartaAMostrar = this.cartas[this.cartaAhora];
  }

  mayor(){
    this.sacarCartaSiguiente();
    if (this.valoresCartas[this.cartaAhora] <= this.valoresCartas[this.cartaSiguiente]) {
      this.puntos++;
      this.correcto = true;
      this.incorrecto = false;
    }else{
      this.correcto = false;
      this.incorrecto = true;
    }
    this.cartaAMostrar = this.cartas[this.cartaSiguiente];
    this.cartaAhora = this.cartaSiguiente;
    console.log(this.cartaSiguiente);
    console.log(this.cartaAMostrar);
    this.count++;
    console.log(this.count);
  }

  menor(){
    this.sacarCartaSiguiente();
    if (this.valoresCartas[this.cartaAhora] >= this.valoresCartas[this.cartaSiguiente]) {
      this.puntos++;
      this.correcto = true;
      this.incorrecto = false;
    }else{
      this.correcto = false;
      this.incorrecto = true;
    }
    this.cartaAMostrar = this.cartas[this.cartaSiguiente];
    this.cartaAhora = this.cartaSiguiente;
  }

  terminar(){
    this.termino = true;
  }

  sacarCarta(){
    this.cartaAhora = Math.floor(Math.random() * 48);
    while (this.cartasMostradas.includes(this.cartaAhora)) {
      this.cartaAhora = Math.floor(Math.random() * 48);
    }
    this.cartasMostradas.push(this.cartaAhora);
    this.cartasRestantes--;
    this.count++;
    console.log(this.count);
  }

  sacarCartaSiguiente(){
    this.cartaSiguiente = Math.floor(Math.random() * 48);
    while (this.cartasMostradas.includes(this.cartaSiguiente)) {
      this.cartaSiguiente = Math.floor(Math.random() * 48);
    }
    this.cartasMostradas.push(this.cartaSiguiente);
    this.cartasRestantes--;
    if (this.cartasRestantes == 0) {
      this.terminar();
    }
  }

  inicializarValores(){
    let count = 1;
    for (let i = 0; i < 48; i++) {
      this.valoresCartas.push(count);
      count++;
      if (count == 13) {
        count = 1;
      }
    }
  }

  reiniciar(){
    this.correcto = false;
    this.incorrecto = false;
    this.puntos = 0;
    this.cartasRestantes = 48;
    this.cartasMostradas = [];
    this.cartaSiguiente = 0;
    this.sacarCarta();
    this.cartaAMostrar = this.cartas[this.cartaAhora];
    this.termino = false;
  }
}
