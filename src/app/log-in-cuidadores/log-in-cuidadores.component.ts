import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CuidadoresService } from 'src/app/services/cuidadores.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

declare var Swal;

@Component({
  selector: 'app-log-in-cuidadores',
  templateUrl: './log-in-cuidadores.component.html',
  styleUrls: ['./log-in-cuidadores.component.css']
})
export class LogInCuidadoresComponent implements OnInit {

  logInFormCuidador: FormGroup;

  router: Router;

  constructor(private usuariosService: UsuariosService) {
    this.logInFormCuidador = new FormGroup({
      email: new FormControl,
      password: new FormControl
    })
  }

  ngOnInit(): void {
  }

  async onSubmitCuidador() {
    const response = await this.usuariosService.logInCuidador(this.logInFormCuidador.value);

    if (response['effectedRows'] === 1) {
      Swal.fire('logIn realizado correctamente', 'Se ha realizado el logIn de manera correcta', 'succes');
      this.router;
    }
    console.log(response);

  }

}
