import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  lat: number;
  lng: number;
  latM1: number;
  lngM1: number;
  latM2: number;
  lngM2: number;
  latM3: number;
  lngM3: number;
  zoom: any;

  constructor() {
    this.lat = 40.416857;
    this.lng = -3.703440;
    this.latM1 = 40.417668;
    this.lngM1 = -3.700173;
    this.latM2 = 40.416577;
    this.lngM2 = -3.705061;
    this.latM3 = 40.415977;
    this.lngM3 = -3.703235;
    this.zoom = 16;
  }

  ngOnInit() {

  }

}
