import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MascotasService } from 'src/app/services/mascotas.service';

declare var Swal;

@Component({
  selector: 'app-formulario-mascotas',
  templateUrl: './formulario-mascotas.component.html',
  styleUrls: ['./formulario-mascotas.component.css']
})
export class FormularioMascotasComponent implements OnInit {

  newMascotaForm: FormGroup;

  router: Router;

  constructor(private mascotasService: MascotasService) {
    this.newMascotaForm = new FormGroup({
      nombre: new FormControl,
      especie: new FormControl,
      raza: new FormControl,
      peso: new FormControl,
      sexo: new FormControl,
      edad: new FormControl,
      caracter: new FormControl,
      cuidadosEspeciales: new FormControl,
      queCome: new FormControl,
      masSobre: new FormControl,
      fk_cliente: new FormControl
      //FOTO MASCOTA
    })
  }

  ngOnInit(): void {
  }

  async onSubmit() {
    const response = await this.mascotasService.newMascota(this.newMascotaForm.value);
    if (response['effectedRows'] === 1) {
      Swal.fire('Mascota añadida correctamente', 'Se ha creado una mascota correctamente', 'succes');
      this.router;
    }
  }

}
