import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { PreguntadosService } from '../../services/preguntados/preguntados.service';

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
  pregunta: string = 'A que pais pertenece esta bandera?';
  correcto: boolean = false;
  incorrecto: boolean = false;
  puntos: number = 0;
  peruJugado: boolean = false;
  italiaJugado: boolean = false;
  brasilJugado: boolean = false;
  españaJugado: boolean = false;
  reiniciar: boolean = false;
  imgEspaña: string = '';
  imgBrasil: string = '';
  imgPeru: string = '';
  imgItalia: string = '';

  constructor(
    private preguntadosService: PreguntadosService
  ){}

  ngOnInit(): void {
    this.preguntadosService.getPaises()
    .subscribe(paises => {
      paises.forEach(pais => {
        switch(pais.name.common){
          case 'Spain':
            this.imgEspaña = pais.flags.png;
            break;
          case 'Italy':
            this.imgItalia = pais.flags.png;
            break;
          case 'Brazil':
            this.imgBrasil = pais.flags.png;
            break;
          case 'Peru':
            this.imgPeru = pais.flags.png;
            break;
        }
      });
      this.proximaPregunta();
    });
  }

  peru(){
    this.img = this.imgPeru;
    this.opcionA = 'Peru';
    this.opcionB = 'Ecuador';
    this.opcionC = 'Polonia';
    this.opcionD = 'Paraguay';
    this.opcionCorrecta = 'Peru';
    this.peruJugado = true;
  }

  españa(){
    this.img = this.imgEspaña;
    this.opcionA = 'Italia';
    this.opcionB = 'España';
    this.opcionC = 'Francia';
    this.opcionD = 'Portugal';
    this.opcionCorrecta = 'España';
    this.españaJugado = true;
  }

  brasil(){
    this.img = this.imgBrasil;
    this.opcionA = 'Honduras';
    this.opcionB = 'Mexico';
    this.opcionC = 'Uruguay';
    this.opcionD = 'Brasil';
    this.opcionCorrecta = 'Brasil';
    this.brasilJugado = true;
  }

  italia(){
    this.img = this.imgItalia;
    this.opcionA = 'Francia';
    this.opcionB = 'Rusia';
    this.opcionC = 'Italia';
    this.opcionD = 'Inglaterra';
    this.opcionCorrecta = 'Italia';
    this.italiaJugado = true;
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
    if (!this.peruJugado || !this.brasilJugado || !this.italiaJugado || !this.españaJugado) {
      this.proximaPregunta();
    }else{
      this.reiniciar = true;
    }
    
  }

  proximaPregunta(){
    let pregunta = Math.floor(Math.random() * 4) + 1;
    let preguntaEmpezada = false;
    if (!this.peruJugado || !this.brasilJugado || !this.italiaJugado || !this.españaJugado) {
      while(!preguntaEmpezada){
        switch (pregunta) {
          case 1:
            if (!this.peruJugado) {
              this.peru()
              preguntaEmpezada = true;
            }
            break;
          case 2:
            if (!this.brasilJugado) {
              this.brasil()
              preguntaEmpezada = true;
            }
            break;
          case 3:
            if (!this.españaJugado) {
              this.españa()
              preguntaEmpezada = true;
            }
            break;
          case 4:
            if (!this.italiaJugado) {
              this.italia()
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
    this.peruJugado = false;
    this.italiaJugado = false;
    this.brasilJugado = false;
    this.españaJugado = false;
    this.reiniciar = false;
    this.correcto = false;
    this.incorrecto = false;
    this.proximaPregunta();
  }
}
