import{g as W,i as D,j,l as B}from"./chunk-IGE3Y52P.js";import{e as I}from"./chunk-YRF3B3U5.js";import{a as E,b,e as x,g as P,h as F,i as O,j as k,k as R,l as T}from"./chunk-RZVB3B4V.js";import"./chunk-WXI33M2S.js";import"./chunk-I4OIK772.js";import{x as w,z as S}from"./chunk-N7BS4TKD.js";import{j as v,m as y}from"./chunk-Z3Y3D4HP.js";import{$a as d,Eb as _,Ob as l,Sb as c,Tb as f,Ub as u,Wb as C,_a as m,na as h,pb as M,rb as p,vb as i,wb as t}from"./chunk-JDG5T4L5.js";function L(n,o){n&1&&(i(0,"p",6),l(1,"El email ya esta registrado"),t())}function N(n,o){n&1&&(i(0,"p",6),l(1,"La contrase\xF1a tiene que tener mas de 6 caracteres"),t())}function Y(n,o){n&1&&(i(0,"p",6),l(1,"El email es invalido"),t())}var ie=(()=>{let o=class o{constructor(a,r,e){this.router=a,this.usuarioService=r,this.firestore=e,this.email="",this.password="",this.mailYaExistente=!1,this.contraInvalida=!1,this.mailInvalido=!1}registro(){this.mailYaExistente=!1,this.mailInvalido=!1,this.contraInvalida=!1,this.usuarioService.registro(this.email,this.password).then(a=>{let r=j(this.firestore,"ingresos");D(r,{fecha:new Date,user:this.email}),typeof localStorage<"u"&&localStorage.setItem("email",JSON.stringify(this.email)),this.router.navigate(["/"])}).catch(a=>{console.log(a),a.code==="auth/email-already-in-use"?this.mailYaExistente=!0:a.code==="auth/weak-password"?this.contraInvalida=!0:a.code==="auth/invalid-email"&&(this.mailInvalido=!0)})}};o.\u0275fac=function(r){return new(r||o)(d(I),d(B),d(W))},o.\u0275cmp=h({type:o,selectors:[["app-registro"]],standalone:!0,features:[C],decls:17,vars:5,consts:[[1,"registro"],[1,"form"],["matInput","","type","text",3,"ngModelChange","ngModel"],["matInput","","type","password",3,"ngModelChange","ngModel"],["mat-raised-button","",3,"click"],["class","error",4,"ngIf"],[1,"error"]],template:function(r,e){r&1&&(i(0,"div",0)(1,"div",1)(2,"h1"),l(3,"Crear cuenta"),t(),i(4,"mat-form-field")(5,"mat-label"),l(6,"Email"),t(),i(7,"input",2),u("ngModelChange",function(s){return f(e.email,s)||(e.email=s),s}),t()(),i(8,"mat-form-field")(9,"mat-label"),l(10,"Contrase\xF1a"),t(),i(11,"input",3),u("ngModelChange",function(s){return f(e.password,s)||(e.password=s),s}),t()(),i(12,"button",4),_("click",function(){return e.registro()}),l(13,"Crear"),t(),M(14,L,2,0,"p",5)(15,N,2,0,"p",5)(16,Y,2,0,"p",5),t()()),r&2&&(m(7),c("ngModel",e.email),m(4),c("ngModel",e.password),m(3),p("ngIf",e.mailYaExistente),m(),p("ngIf",e.contraInvalida),m(),p("ngIf",e.mailInvalido))},dependencies:[S,w,k,O,F,T,R,P,E,b,x,y,v],styles:[".registro[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;margin-top:6%}.form[_ngcontent-%COMP%]{width:40%;text-align:center;background-color:#3e5c76;box-shadow:0 0 10px #3e5c7680;border-radius:10px}.registro[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:80%;display:block;margin:0 auto}.form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-bottom:2%;background-color:#f0ebd8}.error[_ngcontent-%COMP%]{color:#e63946;font-size:large;font-weight:500}h1[_ngcontent-%COMP%]{color:#f0ebd8}"]});let n=o;return n})();export{ie as RegistroComponent};