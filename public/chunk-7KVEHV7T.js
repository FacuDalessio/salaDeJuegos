import{x as y,z as A}from"./chunk-N7BS4TKD.js";import{j as x,m as S}from"./chunk-Z3Y3D4HP.js";import{Ab as _,Eb as h,Fb as l,Ib as b,Ob as o,Qb as f,Wb as v,Xa as j,_a as i,na as M,pb as u,rb as p,vb as s,wb as a,xa as m,xb as C,ya as d}from"./chunk-JDG5T4L5.js";function I(t,n){if(t&1&&(s(0,"div")(1,"h3",4),o(2,"El juego termino !"),a(),s(3,"p",5),o(4),a()()),t&2){let e=l();i(4),f("Puntos finales: ",e.puntos,"")}}function z(t,n){t&1&&(s(0,"p",5),o(1,"Correcto!"),a())}function E(t,n){t&1&&(s(0,"p",15),o(1,"Incorrecto!"),a())}function k(t,n){if(t&1){let e=_();s(0,"div")(1,"div"),C(2,"img",6),a(),s(3,"div",7)(4,"button",8),h("click",function(){m(e);let r=l();return d(r.mayor())}),o(5,"Mayor"),a(),s(6,"button",8),h("click",function(){m(e);let r=l();return d(r.menor())}),o(7,"Menor"),a()(),s(8,"div",9),u(9,z,2,0,"p",10)(10,E,2,0,"p",11),a(),s(11,"div",12)(12,"p",13),o(13),a(),s(14,"p",14),o(15),a()()()}if(t&2){let e=l();i(2),b("src",e.cartaAMostrar,j),i(2),p("disabled",e.botonFinalizar),i(2),p("disabled",e.botonFinalizar),i(3),p("ngIf",e.correcto),i(),p("ngIf",e.incorrecto),i(3),f("Puntos: ",e.puntos,""),i(2),f("Cartas restantes: ",e.cartasRestantes,"")}}function w(t,n){if(t&1){let e=_();s(0,"button",16),h("click",function(){m(e);let r=l();return d(r.terminar())}),o(1,"Finalizar"),a()}}var B=(()=>{let n=class n{constructor(){this.correcto=!1,this.incorrecto=!1,this.puntos=0,this.cartas=["../../../assets/cartas/espada/1.jpg","../../../assets/cartas/espada/2.jpg","../../../assets/cartas/espada/3.jpg","../../../assets/cartas/espada/4.jpg","../../../assets/cartas/espada/5.jpg","../../../assets/cartas/espada/6.jpg","../../../assets/cartas/espada/7.jpg","../../../assets/cartas/espada/8.jpg","../../../assets/cartas/espada/9.jpg","../../../assets/cartas/espada/10.jpg","../../../assets/cartas/espada/11.jpg","../../../assets/cartas/espada/12.jpg","../../../assets/cartas/copa/1.jpg","../../../assets/cartas/copa/2.jpg","../../../assets/cartas/copa/3.jpeg","../../../assets/cartas/copa/4.jpg","../../../assets/cartas/copa/5.jpg","../../../assets/cartas/copa/6.jpg","../../../assets/cartas/copa/7.jpg","../../../assets/cartas/copa/8.jpg","../../../assets/cartas/copa/9.jpg","../../../assets/cartas/copa/10.jpg","../../../assets/cartas/copa/11.jpg","../../../assets/cartas/copa/12.jpg","../../../assets/cartas/oro/1.jpg","../../../assets/cartas/oro/2.jpg","../../../assets/cartas/oro/3.jpg","../../../assets/cartas/oro/4.jpg","../../../assets/cartas/oro/5.jpg","../../../assets/cartas/oro/6.jpeg","../../../assets/cartas/oro/7.jpg","../../../assets/cartas/oro/8.jpg","../../../assets/cartas/oro/9.jpg","../../../assets/cartas/oro/10.jpg","../../../assets/cartas/oro/11.jpg","../../../assets/cartas/oro/12.jpg","../../../assets/cartas/basto/1.jpg","../../../assets/cartas/basto/2.jpg","../../../assets/cartas/basto/3.jpg","../../../assets/cartas/basto/4.jpg","../../../assets/cartas/basto/5.jpg","../../../assets/cartas/basto/6.jpg","../../../assets/cartas/basto/7.jpg","../../../assets/cartas/basto/8.jpg","../../../assets/cartas/basto/9.jpg","../../../assets/cartas/basto/10.jpg","../../../assets/cartas/basto/11.jpg","../../../assets/cartas/basto/12.jpg"],this.cartasRestantes=48,this.valoresCartas=[],this.cartaAMostrar="",this.cartasMostradas=[],this.cartaAhora=0,this.cartaSiguiente=0,this.count=0,this.termino=!1,this.botonFinalizar=!1,this.inicializarValores(),this.sacarCarta(),this.cartaAMostrar=this.cartas[this.cartaAhora]}mayor(){this.sacarCartaSiguiente(),this.valoresCartas[this.cartaAhora]<=this.valoresCartas[this.cartaSiguiente]?(this.puntos++,this.correcto=!0,this.incorrecto=!1):(this.correcto=!1,this.incorrecto=!0),this.cartaAMostrar=this.cartas[this.cartaSiguiente],this.cartaAhora=this.cartaSiguiente,console.log(this.cartaSiguiente),console.log(this.cartaAMostrar),this.count++,console.log(this.count)}menor(){this.sacarCartaSiguiente(),this.valoresCartas[this.cartaAhora]>=this.valoresCartas[this.cartaSiguiente]?(this.puntos++,this.correcto=!0,this.incorrecto=!1):(this.correcto=!1,this.incorrecto=!0),this.cartaAMostrar=this.cartas[this.cartaSiguiente],this.cartaAhora=this.cartaSiguiente}terminar(){this.termino=!0}finalizar(){this.botonFinalizar=!0}sacarCarta(){for(this.cartaAhora=Math.floor(Math.random()*48);this.cartasMostradas.includes(this.cartaAhora);)this.cartaAhora=Math.floor(Math.random()*48);this.cartasMostradas.push(this.cartaAhora),this.cartasRestantes--,this.count++}sacarCartaSiguiente(){for(this.cartaSiguiente=Math.floor(Math.random()*48);this.cartasMostradas.includes(this.cartaSiguiente);)this.cartaSiguiente=Math.floor(Math.random()*48);this.cartasMostradas.push(this.cartaSiguiente),this.cartasRestantes--,this.cartasRestantes==0&&this.finalizar()}inicializarValores(){let c=1;for(let r=0;r<48;r++)this.valoresCartas.push(c),c++,c==13&&(c=1)}reiniciar(){this.correcto=!1,this.incorrecto=!1,this.puntos=0,this.cartasRestantes=48,this.cartasMostradas=[],this.cartaSiguiente=0,this.sacarCarta(),this.cartaAMostrar=this.cartas[this.cartaAhora],this.termino=!1}};n.\u0275fac=function(r){return new(r||n)},n.\u0275cmp=M({type:n,selectors:[["app-mayor-menor"]],standalone:!0,features:[v],decls:9,vars:3,consts:[[1,"juego"],[4,"ngIf"],["mat-raised-button","",1,"reiniciar",3,"click"],["class","finalizar","mat-raised-button","",3,"click",4,"ngIf"],[1,"termino"],[1,"correcto"],["alt","carta",3,"src"],[1,"botones"],["mat-raised-button","",3,"click","disabled"],[1,"correctoIncorrecto"],["class","correcto",4,"ngIf"],["class","incorrecto",4,"ngIf"],[1,"puntosCartasRestantes"],[1,"puntos"],[1,"cartasRestantes"],[1,"incorrecto"],["mat-raised-button","",1,"finalizar",3,"click"]],template:function(r,g){r&1&&(s(0,"div",0)(1,"h1"),o(2,"Mayor o Menor"),a(),u(3,I,5,1,"div",1)(4,k,16,7,"div",1),s(5,"div")(6,"button",2),h("click",function(){return g.reiniciar()}),o(7,"Reiniciar"),a(),u(8,w,2,0,"button",3),a()()),r&2&&(i(3),p("ngIf",g.termino),i(),p("ngIf",!g.termino),i(4),p("ngIf",g.botonFinalizar))},dependencies:[A,y,S,x],styles:[".juego[_ngcontent-%COMP%]{text-align:center;width:80%;margin:auto}h1[_ngcontent-%COMP%]{color:#f0ebd8;margin-top:0%;font-size:40px}img[_ngcontent-%COMP%]{width:20%}.botones[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .reiniciar[_ngcontent-%COMP%], .finalizar[_ngcontent-%COMP%]{margin:5px;background-color:#f0ebd8}.puntosCartasRestantes[_ngcontent-%COMP%], .termino[_ngcontent-%COMP%]{color:#f0ebd8}.correcto[_ngcontent-%COMP%]{color:#90be6d}.incorrecto[_ngcontent-%COMP%]{color:#e63946}"]});let t=n;return t})();export{B as MayorMenorComponent};