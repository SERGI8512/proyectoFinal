import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';

declare var Swal;

@Component({
  selector: 'app-formulario-usuarios',
  templateUrl: './formulario-usuarios.component.html',
  styleUrls: ['./formulario-usuarios.component.css']
})
export class FormularioUsuariosComponent implements OnInit {

  newUsuarioForm: FormGroup;

  router: Router;

  constructor(private usuariosService: UsuariosService) {
    this.newUsuarioForm = new FormGroup({
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

  async onSubmit() {
    const response = await this.usuariosService.newUsuario(this.newUsuarioForm.value);
    if (response['effectedRows'] === 1) {
      Swal.fire('Usuario Insertado', 'Se ha creado un nuevo usuario', 'succes');
      this.router;
    }
  }

}
