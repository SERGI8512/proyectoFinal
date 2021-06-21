import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CuidadoresService } from 'src/app/services/cuidadores.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

declare var Swal;

@Component({
  selector: 'app-formulario-cuidadores',
  templateUrl: './formulario-cuidadores.component.html',
  styleUrls: ['./formulario-cuidadores.component.css']
})
export class FormularioCuidadoresComponent implements OnInit {

  newCuidadorForm: FormGroup;

  //PREGUNTAR PORQUE PONEMOS ROUTER AQUÍ.
  router: Router;

  constructor(private usuariosService: UsuariosService) {
    this.newCuidadorForm = new FormGroup({
      nombre: new FormControl,
      apellido: new FormControl,
      experimentado: new FormControl,
      email: new FormControl,
      direccion: new FormControl,
      edad: new FormControl,
      genero: new FormControl,
      razasAdmitidas: new FormControl,
      telefono: new FormControl,
      password: new FormControl,
      repeatPassword: new FormControl
    })
  }

  ngOnInit(): void {
  }

  async onSubmit() {
    const response = await this.usuariosService.newCuidador(this.newCuidadorForm.value);
    console.log(response);

    if (response['effectedRows'] === 1) {
      Swal.fire('Cuidador Insertado Correctamente', 'Se ha creado un nuevo cuidador', 'succes');
      this.router;
    }
  }

}