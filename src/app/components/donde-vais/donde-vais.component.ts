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

      var chinchetas = [
        { title: 'Barcelona', lat: 41.3887900, lng: 2.1589900 },
        { title: 'Figueres', lat: 42.268750, lng: 2.957293 },
        { title: 'Tarragona', lat: 41.128584, lng: 1.226946 },
      ]
      var marcador;

      for (var i = 0; i < chinchetas.length; i++) {

        // nuevo marcador
        marcador = new google.maps.Marker({
          position: new google.maps.LatLng(chinchetas[i].lat, chinchetas[i].lng),
          map: this.mapa,
          title: chinchetas[i].title,
          animation: google.maps.Animation.DROP
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
      zoom: 15,
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
