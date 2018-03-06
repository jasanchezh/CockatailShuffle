import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  public ronImg: string;
  public vodkaImg: string;
  public ginebraImg: string;
  public srcImg: string;
  public drink: string;

  constructor() {
    
    this.ronImg = 'https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/201612/28/00118733302030____2__600x600.jpg';
    this.vodkaImg = 'https://bodegasalianza.vteximg.com.br/arquivos/ids/157939-800-800/1804-1.jpg?v=636138051173200000';
    this.ginebraImg = 'https://s2.dia.es/medias/hb6/he4/9233199464478.jpg';
    this.srcImg = this.ronImg;
    this.drink = 'ron';
  }

  ngOnInit() {
  }

  mix() {
    console.log(this.drink)
    if (this.drink === 'ron') {
      this.srcImg = this.ronImg;
    }
    if (this.drink === 'vodka') {
      this.srcImg = this.vodkaImg;
    }
    if (this.drink === 'ginebra') {
      this.srcImg = this.ginebraImg;
    }
  }
}
