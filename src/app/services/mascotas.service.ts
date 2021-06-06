import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { mascota } from '../interfaces/mascota.interface';

@Injectable({
  providedIn: 'root'
})
export class MascotasService {

  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000'
  }

  getAllMascotas(): Promise<mascota[]> {
    return this.httpClient.get<mascota[]>(`${this.baseUrl}/api/usuarios/mascotas`).toPromise();
  }

  newMascota(formsValue) {
    return this.httpClient.post(`${this.baseUrl}/api/usuarios/mascotas/new`, formsValue).toPromise();
  }

}
