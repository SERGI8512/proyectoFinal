import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { usuario } from '../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000'
  }

  getAllUsuarios(): Promise<usuario[]> {
    return this.httpClient.get<usuario[]>(`${this.baseUrl}/api/usuarios`).toPromise();
  }

  logInCliente(formsValue) {
    return this.httpClient.post(`${this.baseUrl}/api/usuarios/loginCliente`, formsValue).toPromise();
  }
  logInCuidador(formsValue) {
    return this.httpClient.post(`${this.baseUrl}/api/usuarios/loginCuidador`, formsValue).toPromise();
  }


  newCliente(formsValue) {
    return this.httpClient.post(`${this.baseUrl}/api/usuarios/newCliente`, formsValue).toPromise();
  }

  newCuidador(formsValue) {
    return this.httpClient.post(`${this.baseUrl}/api/usuarios/newCuidador`, formsValue).toPromise();
  }

}
