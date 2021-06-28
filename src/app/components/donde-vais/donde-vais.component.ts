/// <reference path="../../../../node_modules/@types/googlemaps/index.d.ts" />

import { animation } from '@angular/animations';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';



@Component({
  selector: 'app-donde-vais',
  templateUrl: './donde-vais.component.html',
  styleUrls: ['./donde-vais.component.css']
})
export class DondeVaisComponent implements OnInit {

  mapa: google.maps.Map;

  @ViewChild('divMapa') divMapa: ElementRef;

  constructor() { }

  /* (39.4702, -0.376805) */

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position.coords.latitude, position.coords.longitude);

      const center = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

      this.mapa.setCenter(center);

      const marker = new google.maps.Marker({
        position: center,
        animation: google.maps.Animation.DROP
      });
      marker.setMap(this.mapa);

      var marcadores = [
        { title: 'Barcelona', lat: 41.3887900, lng: 2.1589900, url: 'api/cuidadores' },
        { title: 'Figueres', lat: 42.268750, lng: 2.957293, url: 'api/usuarios' },
        { title: 'Tarragona', lat: 41.128584, lng: 1.226946, url: 'api/usuarios' },
        { title: 'Sergi, Valencia', lat: 39.4077008, lng: -0.5019402, url: 'api/cuidadores/1' },
        { title: 'Juan, Valencia', lat: 39.466300, lng: -0.401175, url: 'api/cuidadores/2' },
        { title: 'Alba, Valencia', lat: 39.4791982, lng: -0.3944565, url: 'api/cuidadores/3' },
        { title: 'Lara, Valencia', lat: 39.492377, lng: -0.367176, url: 'api/cuidadores/4' },
        { title: 'Ramón, Valencia', lat: 39.485377, lng: -0.362064, url: 'api/cuidadores/5' },
        { title: 'Ernesto, Valencia', lat: 39.437853, lng: -0.343502, url: 'api/cuidadores/6' },
        { title: 'Mario, Valencia', lat: 39.432454, lng: -0.343502, url: 'api/cuidadores/7' },
        { title: 'Carlos, Valencia', lat: 39.444647, lng: -0.397364, url: 'api/cuidadores/8' },
        { title: 'Lorena, Valencia', lat: 39.455284, lng: -0.380806, url: 'api/cuidadores/10' },
        { title: 'Adriana, Valencia', lat: 39.463516, lng: -0.390597, url: 'api/cuidadores/11' },
        { title: 'Pau, Valencia', lat: 39.459853, lng: -0.350157, url: 'api/cuidadores/13' },
        { title: 'Dolores, Valencia', lat: 39.477503, lng: -0.362907, url: 'api/cuidadores/18' },
        { title: 'Belén, Valencia', lat: 39.468695, lng: -0.356642, url: 'api/cuidadores/21' },
        { title: 'Pablo, Valencia', lat: 39.471404, lng: -0.374891, url: 'api/cuidadores/16' },
        { title: 'Mariano, Valencia', lat: 39.459185, lng: -0.399545, url: 'api/cuidadores/19' },
        { title: 'Carmen, Valencia', lat: 39.459302, lng: -0.390871, url: 'api/cuidadores/22' },
        { title: 'Alberto, Valencia', lat: 39.479490, lng: -0.417760, url: 'api/cuidadores/24' },
        { title: 'Rocío, Valencia', lat: 39.482222, lng: -0.442068, url: 'api/cuidadores/25' },
        { title: 'Maria, Valencia', lat: 39.482222, lng: -0.442068, url: 'api/cuidadores/26' },
        { title: 'Juan, Valencia', lat: 39.454814, lng: -0.432202, url: 'api/cuidadores/2' },
      ]

      var marcador;

      for (let mimarcador of marcadores) {

        // nuevo marcador
        marcador = new google.maps.Marker({
          position: new google.maps.LatLng(mimarcador.lat, mimarcador.lng),
          map: this.mapa,
          title: mimarcador.title,
          animation: google.maps.Animation.DROP,


        });
        marcador.addListener('click', function () {
          window.location.href = mimarcador.url;
        });
      }
      marcador.setMap(this.mapa);

    });

  }

  ngAfterViewInit() {
    this.cargarMapa();
    this.autocomplete();
  }

  cargarMapa() {
    const mapOptions = {
      center: new google.maps.LatLng(40, -3),
      zoom: 12.5,
      mapTypeId: google.maps.MapTypeId.HYBRID
    }

    this.mapa = new google.maps.Map(this.divMapa.nativeElement, mapOptions);

  }

  autocomplete() {
    const inputPlaces = document.getElementById('inputPlaces') as HTMLInputElement;
    const autocomplete = new google.maps.places.Autocomplete(inputPlaces);

    google.maps.event.addListener(autocomplete, 'place_changed', event => {
      const place = autocomplete.getPlace();
      this.mapa.setCenter(place.geometry.location)

    })
  }

}
