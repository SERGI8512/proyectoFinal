import { Component, OnInit } from '@angular/core';
import { cuidador } from 'src/app/interfaces/cuidador.interface';
import { CuidadoresService } from 'src/app/services/cuidadores.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cuidadores',
  templateUrl: './cuidadores.component.html',
  styleUrls: ['./cuidadores.component.css']
})
export class CuidadoresComponent implements OnInit {

  arrCuidadores: any;

  constructor(private CuidadoresService: CuidadoresService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.CuidadoresService.getAllCuidadores()
      .then(response => this.arrCuidadores = response)
      .catch((error) => console.log(error));

  }

  onClick() {

  }

}
