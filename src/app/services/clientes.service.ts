import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { usuario } from '../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000'
  }

  getAllUsuarios(): Promise<usuario[]> {
    return this.httpClient.get<usuario[]>(`${this.baseUrl}/api/clientes`).toPromise();
  }

}