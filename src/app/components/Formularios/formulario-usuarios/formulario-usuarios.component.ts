import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-formulario-usuarios',
  templateUrl: './formulario-usuarios.component.html',
  styleUrls: ['./formulario-usuarios.component.css']
})
export class FormularioUsuariosComponent implements OnInit {

  newUsuario: FormGroup

  constructor(private usuariosService: UsuariosService) {
    this.newUsuario = new FormGroup({
      nombre: new FormControl,
      apellido: new FormControl,
      email: new FormControl,
      direccion: new FormControl,
      edad: new FormControl,
      genero: new FormControl,
      telefono: new FormControl,
      password: new FormControl,
      repeatPassword: new FormControl
    })
  }
  ngOnInit(): void {
  }

}
