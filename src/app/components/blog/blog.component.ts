import { Component, OnInit } from '@angular/core';
import { mascota } from 'src/app/interfaces/mascota.interface';
import { MascotasService } from 'src/app/services/mascotas.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  
  arrMascotas: mascota[];

  constructor(private mascotasService: MascotasService) { }

  ngOnInit(): void {
      this.mascotasService.getAllMascotas()
        .then(response => this.arrMascotas = response)
        .catch((error) => console.log(error));
  }

}
