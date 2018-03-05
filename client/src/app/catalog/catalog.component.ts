import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  public ronImg: string;
  public vodkaImg: string;
  public ginebraImg: string;
  public src: string;


  constructor() {
    this.src = 'https://static.vix.com/es/sites/default/files/imj/elgrancatador/c/cocteles_fresa5.jpg';
    this.ronImg = 'https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/201612/28/00118733302030____2__600x600.jpg';
    this.vodkaImg = 'https://bodegasalianza.vteximg.com.br/arquivos/ids/157939-800-800/1804-1.jpg?v=636138051173200000';
    this.ginebraImg = 'https://s2.dia.es/medias/hb6/he4/9233199464478.jpg';
  }

  ngOnInit() {
  }

  submitForm(myForm) {
    if (myForm.value === 'ron') {
      this.src = this.ronImg;
    }
    if (myForm.value === 'vodka') {
      this.src = this.vodkaImg;
    }
    if (myForm.value === 'ginebra') {
      this.src = this.ginebraImg;
    }
  }
}
