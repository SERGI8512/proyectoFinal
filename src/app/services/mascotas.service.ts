import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MascotasService {

  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/'
  }

  getAllMascotas() {
    return this.httpClient.get(`${this.baseUrl}/usuatios/mascotas`).toPromise();
  }

  newMascota(formsValue) {
    return this.httpClient.post(`${this.baseUrl}/usuarios/mascotas/new`, formsValue).toPromise();
  }

}
