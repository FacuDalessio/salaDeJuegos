import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-preguntados',
  standalone: true,
  imports: [
    MatButtonModule,
    CommonModule
  ],
  templateUrl: './preguntados.component.html',
  styleUrl: './preguntados.component.css'
})
export class PreguntadosComponent implements OnInit{

  opcionA: string = '';
  opcionB: string = '';
  opcionC: string = '';
  opcionD: string = '';
  opcionCorrecta: string = '';
  img: string = '';
  pregunta: string = '';
  correcto: boolean = false;
  incorrecto: boolean = false;
  puntos: number = 0;
  simpsonJugado: boolean = false;
  redondosJugado: boolean = false;
  sanMartinJugado: boolean = false;
  temperleyJugado: boolean = false;
  reiniciar: boolean = false;

  ngOnInit(): void {
      this.proximaPregunta();
  }

  simpson(){
    this.pregunta = 'Como se llama este personaje de los simpson?';
    this.img = '../../../assets/preguntados/bobPatiño.png';
    this.opcionA = 'Ned Flanders';
    this.opcionB = 'Apu';
    this.opcionC = 'Bob Patiño';
    this.opcionD = 'Barney';
    this.opcionCorrecta = 'Bob Patiño';
    this.simpsonJugado = true;
  }

  temperley(){
    this.pregunta = 'Como se llama el equipo de futbol al que pertenece este escudo?';
    this.img = '../../../assets/preguntados/temperley.png';
    this.opcionA = 'Banfield';
    this.opcionB = 'Temperley';
    this.opcionC = 'Boca Juniors';
    this.opcionD = 'River Plate';
    this.opcionCorrecta = 'Temperley';
    this.temperleyJugado = true;
  }

  sanMartin(){
    this.pregunta = 'Como se llama este procer argentino?';
    this.img = '../../../assets/preguntados/sanMartin.jpeg';
    this.opcionA = 'San Martin';
    this.opcionB = 'Manuel Belgrano';
    this.opcionC = 'Julio Argentino Roca';
    this.opcionD = 'Bartolome Mitre';
    this.opcionCorrecta = 'San Martin';
    this.sanMartinJugado = true;
  }

  redondos(){
    this.pregunta = 'Como se llamala banda que lanzo este disco?';
    this.img = '../../../assets/preguntados/redondos.jpeg';
    this.opcionA = 'Los Piojos';
    this.opcionB = 'Los Redondos';
    this.opcionC = 'Sumo';
    this.opcionD = 'Divididos';
    this.opcionCorrecta = 'Los Redondos';
    this.redondosJugado = true;
  }

  jugar(opcion: string){
    if(opcion == this.opcionCorrecta){
      this.puntos++;
      this.correcto = true;
      this.incorrecto = false;
    }else{
      this.correcto = false;
      this.incorrecto = true;
    }
    if (!this.simpsonJugado || !this.sanMartinJugado || !this.redondosJugado || !this.temperleyJugado) {
      this.proximaPregunta();
    }else{
      this.reiniciar = true;
    }
    
  }

  proximaPregunta(){
    let pregunta = Math.floor(Math.random() * 4) + 1;
    let preguntaEmpezada = false;
    if (!this.simpsonJugado || !this.sanMartinJugado || !this.redondosJugado || !this.temperleyJugado) {
      while(!preguntaEmpezada){
        switch (pregunta) {
          case 1:
            if (!this.simpsonJugado) {
              this.simpson()
              preguntaEmpezada = true;
            }
            break;
          case 2:
            if (!this.sanMartinJugado) {
              this.sanMartin()
              preguntaEmpezada = true;
            }
            break;
          case 3:
            if (!this.temperleyJugado) {
              this.temperley()
              preguntaEmpezada = true;
            }
            break;
          case 4:
            if (!this.redondosJugado) {
              this.redondos()
              preguntaEmpezada = true;
            }
            break;
        }
        pregunta = Math.floor(Math.random() * 4) + 1;
      }
    }
  }

  reiniciarJuego(){
    this.puntos= 0;
    this.simpsonJugado = false;
    this.redondosJugado = false;
    this.sanMartinJugado = false;
    this.temperleyJugado = false;
    this.reiniciar = false;
    this.correcto = false;
    this.incorrecto = false;
    this.proximaPregunta();
  }
}
