import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CuidadoresService } from 'src/app/services/cuidadores.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

declare var Swal;


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  logInForm: FormGroup;

  router: Router;

  constructor(private usuariosService: UsuariosService) {
    this.logInForm = new FormGroup({
      email: new FormControl,
      password: new FormControl
    })
  }

  ngOnInit(): void {
  }

  async onSubmit() {
    const response = await this.usuariosService.logIn(this.logInForm.value);

    if (response['effectedRows'] === 1) {
      Swal.fire('logIn realizado correctamente', 'Se ha realizado el logIn de manera correcta', 'succes');
      this.router;
    }
    console.log(response);

  }

}