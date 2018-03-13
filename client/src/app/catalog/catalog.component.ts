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
  public errorImg: string;
  public campariImg: string;
  public negroni: string;

  constructor() {
    this.ronImg =
      "http://justliquor.com.au/544-large_default/bacardi-oakheart-700ml.jpg";
    this.vodkaImg =
      "http://pluspng.com/img-png/vodka-png-absolut-vodka-logo-transparent-png-stickpng-720.png";
    this.ginebraImg = "http://www.albertfsmanduca.com.mt/assets/images/brands_bottles/spirits/gin/seagrams_bottle.png";
    this.srcImg = "http://az659704.vo.msecnd.net/v1/image/c_lpad,w_1500,h_1500/v1400603728/cocktail_bora_bora-1.png";
    this.base = "http://az659704.vo.msecnd.net/v1/image/c_lpad,w_1500,h_1500/v1400603728/cocktail_bora_bora-1.png"; // Imagen generica
    this.colaImg = "http://www.zandh.co.uk/media/catalog/product/cache/1/image/600x600/9df78eab33525d08d6e5fb8d27136e95/c/o/coca_cola_glass.png";
    this.fantaImg = "https://goo.gl/kfLnY9";
    this.tonicaImg = "https://www.danmurphys.com.au/media/DM/Product/308x385/841115_0_9999_med_v1_m56577569855123888.png";
    this.gintonicImg = "http://www.rives.es/img/cocktails/spanish-gintonic.png";
    this.cosmoImg = "http://www.caraibos.com/sites/default/files/upload/cocktails-caraibos/cosmopolitan.png";
    this.cubaLibreImg = "https://www.brugal-rum.com/wp-content/uploads/2016/03/single-cuba-libre.png";
    this.name = "";
    this.errorImg = "https://cdn0.iconfinder.com/data/icons/shift-free/32/Error-512.png";
    this.campariImg = "http://www.camparigroup.com/sites/default/files/brand/campari_1.png";
    this.negroni = "https://1.bp.blogspot.com/-IldHWi_mUl0/UJza_FCw4BI/AAAAAAAAATg/mXhswiOkQVI/s1600/negroni.png"

  }

  ngOnInit() {}

  mix() {
    console.log(this.base);
    if (this.base === "ron") {
      this.srcImg = this.ronImg;
    }
    if (this.base === "vodka") {
      this.srcImg = this.vodkaImg;
    }
    if (this.base === "ginebra") {
      this.srcImg = this.ginebraImg;
    }
  }

  secondMix() {
    console.log(this.second);
    if (this.second === "cola") {
      this.srcImg = this.colaImg;
    }
    if (this.second === "fanta") {
      this.srcImg = this.fantaImg;
    }
    if (this.second === "tonica") {
      this.srcImg = this.tonicaImg;
    }
    if (this.second === "campari") {
      this.srcImg = this.campariImg;
    }
  }

  cocktail() {
    if (
      this.base === "ginebra" &&
      this.second === "tonica" &&
      this.third === "hielo"
    ) {
      this.srcImg = this.gintonicImg;
      this.name = "Gin Tonic";
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
      this.srcImg = this.errorImg;
      this.name = "ERROR";
    }
    if (
      this.base === "ginebra" &&
      this.second === "campari" &&
      this.third === "martiniRosso"
    ) {
      this.srcImg = this.negroni;
      this.name = "Negroni";
    }
  }
}