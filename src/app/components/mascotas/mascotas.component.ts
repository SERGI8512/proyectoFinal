import { Component, OnInit } from '@angular/core';
import { mascota } from 'src/app/interfaces/mascota.interface';
import { MascotasService } from 'src/app/services/mascotas.service';

@Component({
  selector: 'app-mascotas',
  templateUrl: './mascotas.component.html',
  styleUrls: ['./mascotas.component.css']
})
export class MascotasComponent implements OnInit {

  arrMascotas: mascota[];

  constructor(private mascotasService: MascotasService) { }

  ngOnInit(): void {
    this.mascotasService.getAllMascotas()
      .then(response => this.arrMascotas = response)
      .catch((error) => console.log(error));
  }

}
