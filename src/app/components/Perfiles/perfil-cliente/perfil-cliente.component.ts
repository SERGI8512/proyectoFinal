import { Component, OnInit } from '@angular/core';
import { cliente } from 'src/app/interfaces/cliente.interface';
import { ClientesService } from 'src/app/services/clientes.service';
import { ActivatedRoute } from '@angular/router';
import { mascota } from 'src/app/interfaces/mascota.interface';
import { MascotasService } from 'src/app/services/mascotas.service';

@Component({
  selector: 'app-perfil-cliente',
  templateUrl: './perfil-cliente.component.html',
  styleUrls: ['./perfil-cliente.component.css']
})
export class PerfilClienteComponent implements OnInit {

  cliente: cliente;
  mascotas: mascota[];

  constructor(private clienteService: ClientesService, private mascotasService: MascotasService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async params => {
      console.log(params);
      this.cliente = await this.clienteService.getClienteById(params.pClienteId);
    });
  }

}
