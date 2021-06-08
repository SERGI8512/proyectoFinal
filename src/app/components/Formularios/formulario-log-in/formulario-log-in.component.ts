import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CuidadoresService } from 'src/app/services/cuidadores.service';

declare var Swal;

@Component({
  selector: 'app-formulario-log-in',
  templateUrl: './formulario-log-in.component.html',
  styleUrls: ['./formulario-log-in.component.css']
})
export class FormularioLogInComponent implements OnInit {

  logInForm: FormGroup;

  router: Router;

  constructor(private cuidadoresService: CuidadoresService) {
    this.logInForm = new FormGroup({
      email: new FormControl,
      password: new FormControl
    })
  }

  ngOnInit(): void {
  }

  async onSubmit() {
    const response = await this.cuidadoresService.logIn(this.logInForm.value);
    if (response['effectedRows'] === 1) {
      Swal.fire('logIn realizado correctamente', 'Se ha realizado el logIn de manera correcta', 'succes');
      this.router;
    }
  }

}
