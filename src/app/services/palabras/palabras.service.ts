import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PalabrasService {
  constructor(
    private http: HttpClient
  ) { }

  getPalabra(){
    return this.http.get<any>('https://clientes.api.greenborn.com.ar/public-random-word');
  }
}
