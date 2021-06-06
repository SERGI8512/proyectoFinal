import { Component, OnInit } from '@angular/core';
import { cuidador } from 'src/app/interfaces/cuidador.interface';
import { CuidadoresService } from 'src/app/services/cuidadores.service';

@Component({
  selector: 'app-cuidadores',
  templateUrl: './cuidadores.component.html',
  styleUrls: ['./cuidadores.component.css']
})
export class CuidadoresComponent implements OnInit {

  arrCuidadores: cuidador[];

  constructor(private CuidadoresService: CuidadoresService) { }

  ngOnInit(): void {

    this.CuidadoresService.getAllCuidadores()
      .then(response => this.arrCuidadores = response)
      .catch((error) => console.log(error));
    console.log(this.arrCuidadores);
  }

}
