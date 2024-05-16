import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-truco',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule
  ],
  templateUrl: './truco.component.html',
  styleUrl: './truco.component.css'
})
export class TrucoComponent {
  cartas: string[] = [
    '../../../assets/cartas/espada/1.jpg',
    '../../../assets/cartas/espada/2.jpg',
    '../../../assets/cartas/espada/3.jpg',
    '../../../assets/cartas/espada/4.jpg',
    '../../../assets/cartas/espada/5.jpg',
    '../../../assets/cartas/espada/6.jpg',
    '../../../assets/cartas/espada/7.jpg',
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
    '../../../assets/cartas/basto/10.jpg',
    '../../../assets/cartas/basto/11.jpg',
    '../../../assets/cartas/basto/12.jpg',
  ]
  valoresCartas: string[] = [];
  cartaJugador1: string = '';
  cartaJugador2: string = '';
  cartaJugador3: string = '';
  cartaJugador1Valor: string = '';
  cartaJugador2Valor: string = '';
  cartaJugador3Valor: string = '';
  cartaRival1: string = '';
  cartaRival2: string = '';
  cartaRival3: string = '';
  cartaRival1Valor: string = '';
  cartaRival2Valor: string = '';
  cartaRival3Valor: string = '';
  cartaMesa1: string = '';
  cartaMesa2: string = '';
  cartaMesa1Valor: string = '';
  cartaMesa2Valor: string = '';
  cartasEnJuego: number[] = [];
  quienJuega: string = 'jugador';
  cartasJugadas: number = 0;
  manosGanadasRival: number = 0;
  manosGanadasJugador: number = 0;
  btnJugarDevuelta: boolean = false;

  constructor(){
    this.inicializarValores();
    this.repartir();
  }

  repartir(){
    let count = 1;
    for (let i = 0; i < 6; i++) {
      let carta = Math.floor(Math.random() * 40);
      while (this.cartasEnJuego.includes(carta)) {
        carta = Math.floor(Math.random() * 40);
      }
      this.cartasEnJuego.push(carta);
      switch (count) {
        case 1:
          this.cartaJugador1 = this.cartas[carta];
          this.cartaJugador1Valor = this.valoresCartas[carta];
          break;
        case 2:
          this.cartaRival1 = this.cartas[carta];
          this.cartaRival1Valor = this.valoresCartas[carta];
          break;
        case 3:
          this.cartaJugador2 = this.cartas[carta];
          this.cartaJugador2Valor = this.valoresCartas[carta];
          break;
        case 4:
          this.cartaRival2 = this.cartas[carta];
          this.cartaRival2Valor = this.valoresCartas[carta];
          break;
        case 5:
          this.cartaJugador3 = this.cartas[carta];
          this.cartaJugador3Valor = this.valoresCartas[carta];
          break;
        case 6:
          this.cartaRival3 = this.cartas[carta];
          this.cartaRival3Valor = this.valoresCartas[carta];
          break;
      }
      count++;
    }
  }

  reiniciar(){
    this.cartaJugador1 = '';
    this.cartaJugador2 = '';
    this.cartaJugador3 = '';
    this.cartaJugador3Valor = '';
    this.cartaJugador2Valor = '';
    this.cartaJugador1Valor = '';
    this.cartaRival1 = '';
    this.cartaRival2 = '';
    this.cartaRival3 = '';
    this.cartaRival3Valor = '';
    this.cartaRival2Valor = '';
    this.cartaRival1Valor = '';
    this.cartasJugadas = 0;
    this.manosGanadasJugador = 0;
    this.manosGanadasRival = 0;
    this.cartaMesa1 = '';
    this.cartaMesa1Valor = '';
    this.cartaMesa2 = '';
    this.cartaMesa2Valor = '';
    this.cartasEnJuego = [];
    this.quienJuega = 'jugador';
    this.btnJugarDevuelta = false;
    this.repartir();
  }

  setCartasJugadas(){
    this.cartasJugadas++;
    if (this.cartasJugadas % 2 === 0) {
      setTimeout(()=>{
        const cartaMesa1Aux = this.cartaMesa1Valor.split("-")[2];
        const cartaMesa2Aux = this.cartaMesa2Valor.split("-")[2];
        if (parseInt(cartaMesa1Aux, 10) > parseInt(cartaMesa2Aux, 10)) {
          this.quienJuega = 'rival';
          this.manosGanadasRival++;
          this.jugarCartaRival();
        }else{
          this.quienJuega = 'jugador';
          this.manosGanadasJugador++;
        }
      }, 2000);
    }else{
      if (this.quienJuega == 'jugador') {
        this.quienJuega = 'rival';
        this.jugarCartaRival();
      }else{
        this.quienJuega = 'jugador';
      }
    }

    if (this.cartasJugadas == 6) {
      this.btnJugarDevuelta = true;
    }
  }

  jugarCartaRival(){
    if (this.quienJuega == 'rival') {
      let cartaAux1 = ['', '', '-1'];
      let cartaAux2 = ['', '', '-1'];
      let cartaAux3 = ['', '', '-1'];
      if (this.cartaRival1Valor != '-1') {
        cartaAux1 = this.cartaRival1Valor.split("-");
      }
      if (this.cartaRival2Valor != '-1') {
        cartaAux2 = this.cartaRival2Valor.split("-");
      }
      if (this.cartaRival3Valor != '-1') {
        cartaAux3 = this.cartaRival3Valor.split("-");
      }

      if (cartaAux1[2] >= cartaAux2[2] && cartaAux1[2] >= cartaAux3[2] && cartaAux1[2] != '-1') {
        this.cartaMesa1 = this.cartaRival1;
        this.cartaMesa1Valor = this.cartaRival1Valor;
        this.cartaRival1 = '';
        this.cartaRival1Valor = '-1';
      }else if (cartaAux2[2] >= cartaAux1[2] && cartaAux2[2] >= cartaAux3[2] && cartaAux2[2] != '-1'){
        this.cartaMesa1 = this.cartaRival2;
        this.cartaMesa1Valor = this.cartaRival2Valor;
        this.cartaRival2 = '';
        this.cartaRival2Valor = '-1';
      }else if(cartaAux3[2] != '-1'){
        this.cartaMesa1 = this.cartaRival3;
        this.cartaMesa1Valor = this.cartaRival3Valor;
        this.cartaRival3 = '';
        this.cartaRival3Valor = '-1';
      }
      this.setCartasJugadas();
    }
  }

  jugarCarta1(){
    if (this.quienJuega == 'jugador') {
      this.cartaMesa2Valor = this.cartaJugador1Valor;
      this.cartaMesa2 = this.cartaJugador1;
      this.cartaJugador1 = '';
      this.setCartasJugadas();
    }
  }
  jugarCarta2(){
    if (this.quienJuega == 'jugador') {
      this.cartaMesa2Valor = this.cartaJugador2Valor;
      this.cartaMesa2= this.cartaJugador2;
      this.cartaJugador2 = '';
      this.setCartasJugadas();
    }
  }
  jugarCarta3(){
    if (this.quienJuega == 'jugador') {
      this.cartaMesa2Valor = this.cartaJugador3Valor;
      this.cartaMesa2 = this.cartaJugador3;
      this.cartaJugador3 = '';
      this.setCartasJugadas();
    }
  }

  inicializarValores(){
    let count = 1;
    let countPalo = 1;
    for (let i = 0; i < 48; i++) {
      if (count != 8 && count != 9) {
        switch(countPalo){
          case 1:
            this.valoresCartas.push(count + '-espada');
            break;
          case 2:
            this.valoresCartas.push(count + '-copa');
            break;
          case 3:
            this.valoresCartas.push(count + '-oro');
            break;
          case 4:
            this.valoresCartas.push(count + '-basto');
            break;
        }
      }
      count++;
      if (count == 13) {
        count = 1;
        countPalo++;
      }
    }

    this.valoresCartas.forEach((carta, index) => {
      let cartaAux = carta.split("-");
      switch(cartaAux[0]){
        case '4':
          this.valoresCartas[index] = carta + '-0';
          break;
        case '5':
          this.valoresCartas[index] = carta + '-1';
          break;
        case '6':
          this.valoresCartas[index] = carta + '-2';
          break;
        case '7':
          if (cartaAux[1] == 'basto' || cartaAux[1] == 'copa') {
            this.valoresCartas[index] = carta + '-3';
          } else {
            if (cartaAux[1] == 'oro') {
              this.valoresCartas[index] = carta + '-10';
            }else{
              this.valoresCartas[index] = carta + '-11';
            }
          }
          break;
        case '10':
          this.valoresCartas[index] = carta + '-4';
          break;
        case '11':
          this.valoresCartas[index] = carta + '-5';
          break;
        case '12':
          this.valoresCartas[index] = carta + '-6';
          break;
        case '1':
          if (cartaAux[1] == 'oro' || cartaAux[1] == 'copa') {
            this.valoresCartas[index] = carta + '-7';
          }else if (cartaAux[1] == 'basto'){
            this.valoresCartas[index] = carta + '-12';
          }else{
            this.valoresCartas[index] = carta + '-13';
          }
          break;
        case '2':
          this.valoresCartas[index] = carta + '-8';
          break;
        case '3':
          this.valoresCartas[index] = carta + '-9';
          break;
      }
    });
  }
}
