import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { cuidador } from '../interfaces/cuidador.interface';

@Injectable({
  providedIn: 'root'
})
export class CuidadoresService {

  baseUrl: string;


  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000'
  }

  getAllCuidadores(): Promise<cuidador[]> {
    return this.httpClient.get<cuidador[]>(`${this.baseUrl}/api/cuidadores`).toPromise();
  }

  logIn(formsValue) {
    return this.httpClient.post(`${this.baseUrl}/api/login`, formsValue).toPromise();
  }

  newCuidador(formsValue) {
    return this.httpClient.post(`${this.baseUrl}/api/cuidadores/new`, formsValue).toPromise();
  }

  getCuidadorById(pCuidadorId): Promise<cuidador> {
    return this.httpClient.get<cuidador>(`${this.baseUrl}/api/cuidadores/${pCuidadorId}`).toPromise();
  }

}
