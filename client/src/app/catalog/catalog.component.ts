import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-catalog",
  templateUrl: "./catalog.component.html",
  styleUrls: ["./catalog.component.css"]
})
export class CatalogComponent implements OnInit {
  public ronImg: string;
  public vodkaImg: string;
  public ginebraImg: string;
  public srcImg: string;
  public base: string;
  public second: string;
  public colaImg: string;
  public fantaImg: string;
  public tonicaImg: string;
  public gintonicImg: string;
  public third: string;
  public cosmoImg: string;
  public cubaLibreImg: string;
  public name: string;

  constructor() {
    this.ronImg =
      "https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/201612/28/00118733302030____2__600x600.jpg";
    this.vodkaImg =
      "https://bodegasalianza.vteximg.com.br/arquivos/ids/157939-800-800/1804-1.jpg?v=636138051173200000";
    this.ginebraImg = "https://s2.dia.es/medias/hb6/he4/9233199464478.jpg";
    this.srcImg = "https://goo.gl/LxSvNQ";
    this.base = "https://goo.gl/LxSvNQ"; // Imagen generica
    this.colaImg = "https://goo.gl/BdE6fj";
    this.fantaImg = "https://goo.gl/kfLnY9";
    this.tonicaImg = "https://goo.gl/62xK63";
    this.gintonicImg = "https://goo.gl/YqtVfa";
    this.cosmoImg = "https://goo.gl/3nJJqy";
    this.cubaLibreImg = "https://goo.gl/2qmXEh";
    this.name = "";
  }

  ngOnInit() {}

  // mix() {
  //   console.log(this.base);
  //   if (this.base === "ron") {
  //     this.srcImg = this.ronImg;
  //   }
  //   if (this.base === "vodka") {
  //     this.srcImg = this.vodkaImg;
  //   }
  //   if (this.base === "ginebra") {
  //     this.srcImg = this.ginebraImg;
  //   }
  // }

  // secondMix() {
  //   console.log(this.second);
  //   if (this.second === "cola") {
  //     this.srcImg = this.colaImg;
  //   }
  //   if (this.second === "fanta") {
  //     this.srcImg = this.fantaImg;
  //   }
  //   if (this.second === "tonica") {
  //     this.srcImg = this.tonicaImg;
  //   }
  // }

  cocktail() {
    // console.log(this.second);
    if (
      this.base === "ginebra" &&
      this.second === "tonica" &&
      this.third === "hielo"
    ) {
      this.srcImg = this.gintonicImg;
      this.name = "Gintonic";
    }
    if (
      this.base === "vodka" &&
      this.second === "fanta" &&
      this.third === "azucar"
    ) {
      this.srcImg = this.cosmoImg;
      this.name = "Cosmopolitan";
    }
    if (
      this.base === "ron" &&
      this.second === "cola" &&
      this.third === "hielo"
    ) {
      this.srcImg = this.cubaLibreImg;
      this.name = "Cuba libre";
    }
    if (
      this.base === "ron" &&
      this.second === "cola" &&
      this.third === "agua"
    ) {
      this.srcImg = this.cubaLibreImg;
      this.name = "error";
    }
  }
}