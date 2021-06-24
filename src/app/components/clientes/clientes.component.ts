import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';
import { cliente } from 'src/app/interfaces/cliente.interface';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  arrUsuarios: cliente[];

  constructor(private ClientesService: ClientesService) { }

  ngOnInit(): void {
    this.ClientesService.getAllUsuarios()
      .then(response => this.arrUsuarios = response)
      .catch((error) => console.log(error));
  }

}

