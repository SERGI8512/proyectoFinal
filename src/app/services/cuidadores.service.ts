import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CuidadoresService {

  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost3000:/'
  }

  getAllCuidadores() {
    return this.httpClient.get(`${this.baseUrl}/api/cuidadores`).toPromise();
  }

  logIn(formsValue) {
    return this.httpClient.post(`${this.baseUrl}/api/login`, formsValue).toPromise();
  }

  newCuidador(formsValue) {
    return this.httpClient.post(`${this.baseUrl}/cuidadores/new`, formsValue).toPromise();
  }
}
