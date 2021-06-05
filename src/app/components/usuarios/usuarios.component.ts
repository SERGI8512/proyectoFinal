import { Component, Input, OnInit } from '@angular/core';
import { usuario } from 'src/app/interfaces/usuario.interface';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  @Input() usuario: usuario;

  constructor() {

  }

  ngOnInit(): void {
  }



}
