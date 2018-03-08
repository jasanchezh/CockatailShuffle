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
  latM4: number;
  lngM4: number;
  latM5: number;
  lngM5: number;
  latM6: number;
  lngM6: number;
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
    this.latM4 = 40.420142;
    this.lngM4 = -3.698842;
    this.latM5 = 40.420243;
    this.lngM5 = -3.699286;
    this.latM6 = 40.423719;
    this.lngM6 = -3.701422;
    this.zoom = 16;
  }

  ngOnInit() {

  }

}
