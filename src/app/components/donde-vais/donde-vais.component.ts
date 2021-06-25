/// <reference path="../../../../node_modules/@types/googlemaps/index.d.ts" />

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-donde-vais',
  templateUrl: './donde-vais.component.html',
  styleUrls: ['./donde-vais.component.css']
})
export class DondeVaisComponent implements OnInit {

  mapa: google.maps.Map;
  markers: google.maps.Marker[];

  @ViewChild('divMapa') divMapa: ElementRef;

  constructor() {
    this.markers = [

    ]
  }

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

    })
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
