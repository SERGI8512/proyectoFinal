import { Component, OnInit } from '@angular/core';
import { cuidador } from 'src/app/interfaces/cuidador.interface';
import { CuidadoresService } from 'src/app/services/cuidadores.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-perfil-cuidador',
  templateUrl: './perfil-cuidador.component.html',
  styleUrls: ['./perfil-cuidador.component.css']
})
export class PerfilCuidadorComponent implements OnInit {

  cuidador: cuidador;

  constructor(private cuidadoresService: CuidadoresService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async params => {
      console.log(params);

      this.cuidador = await this.cuidadoresService.getCuidadorById(params.pCuidadorId);

    });

  }

}
