import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CuidadoresService } from 'src/app/services/cuidadores.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

declare var Swal;


const USER_INFO_KEY = 'getUserInfo';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  logInFormCliente: FormGroup;
  logInFormCuidador: FormGroup;

  router: Router;

  constructor(private usuariosService: UsuariosService) {
    this.logInFormCliente = new FormGroup({
      email: new FormControl,
      password: new FormControl
    })
    this.logInFormCuidador = new FormGroup({
      email: new FormControl,
      password: new FormControl
    })
  }





  ngOnInit(): void {
  }

  async onSubmitCliente() {
    const response = await this.usuariosService.logInCliente(this.logInFormCliente.value);

    if (response['effectedRows'] === 1) {
      Swal.fire('logIn realizado correctamente', 'Se ha realizado el logIn de manera correcta', 'succes');
      this.router;

    }
    localStorage.setItem(USER_INFO_KEY, JSON.stringify(response));

    console.log(response);

  }
  async onSubmitCuidador() {
    const response = await this.usuariosService.logInCuidador(this.logInFormCliente.value);

    if (response['effectedRows'] === 1) {
      Swal.fire('logIn realizado correctamente', 'Se ha realizado el logIn de manera correcta', 'succes');
      this.router;
    }

    console.log(response);



  }

}