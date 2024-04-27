export class Usuario {
    nombre: string;
    email: string;
    password: string;
  
    constructor(nombre: string, email: string, password: string) {
      this.nombre = nombre;
      this.password = password;
      this.email = email;
    }
}