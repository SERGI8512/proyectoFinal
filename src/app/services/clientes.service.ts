import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { cliente } from '../interfaces/cliente.interface';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000'
  }

  getAllUsuarios(): Promise<cliente[]> {
    return this.httpClient.get<cliente[]>(`${this.baseUrl}/api/clientes`).toPromise();
  }

  getClienteById(pClienteId): Promise<cliente> {
    return this.httpClient.get<cliente>(`${this.baseUrl}/api/clientes/${pClienteId}`).toPromise();
  }

}