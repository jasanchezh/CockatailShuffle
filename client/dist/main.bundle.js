webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\"\n        aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a id=\"logo\" [routerLink]=\"['']\">\n        <img src=\"https://s9.postimg.org/h9f7okqgv/logo-cock.png\" alt=\"Cocktail Shuffle\">\n      </a>\n    </div>\n\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li>\n          <a [routerLink]=\"['login']\">log in</a>\n        </li>\n        <li>\n          <a [routerLink]=\"['login']\">sign up</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n\n<router-outlet></router-outlet>\n\n<footer class=\"footer\">\n  <div class=\"container\">\n    <p class=\"text-muted\">Made with 💖 by Carlos & Jose</p>\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_form_login_form_component__ = __webpack_require__("./src/app/login-form/login-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_session_service__ = __webpack_require__("./src/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__map_map_component__ = __webpack_require__("./src/app/map/map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__catalog_catalog_component__ = __webpack_require__("./src/app/catalog/catalog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__agm_core__ = __webpack_require__("./node_modules/@agm/core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routes = [
    // { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: "", component: __WEBPACK_IMPORTED_MODULE_9__home_home_component__["a" /* HomeComponent */] },
    { path: "login", component: __WEBPACK_IMPORTED_MODULE_6__login_form_login_form_component__["a" /* LoginFormComponent */] },
    { path: "map", component: __WEBPACK_IMPORTED_MODULE_10__map_map_component__["a" /* MapComponent */] },
    { path: "catalog", component: __WEBPACK_IMPORTED_MODULE_11__catalog_catalog_component__["a" /* CatalogComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__login_form_login_form_component__["a" /* LoginFormComponent */],
                __WEBPACK_IMPORTED_MODULE_9__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__map_map_component__["a" /* MapComponent */],
                __WEBPACK_IMPORTED_MODULE_11__catalog_catalog_component__["a" /* CatalogComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_router__["b" /* RouterModule */].forRoot(routes),
                __WEBPACK_IMPORTED_MODULE_12__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: "AIzaSyAcTIMzYcZ8UhOpehf0rQfD-aZSbIfZYQ0"
                })
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__services_session_service__["a" /* SessionService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/catalog/catalog.component.css":
/***/ (function(module, exports) {

module.exports = "/* .combinations{\n    width: 40%;\n    margin-left: 40%;\n} */\nimg{\n    width: 300px;\n}\nlabel {\n    width: 90px;\n}\n.container-fluid .row {\n    margin: 50px 0;\n}\n"

/***/ }),

/***/ "./src/app/catalog/catalog.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"combinations\">\n      <div class=\"col-md-4\">\n        <div>\n          <label class=\"radio-inline\">\n            <input type=\"radio\" name=\"base\" [(ngModel)]=\"base\" value=\"ron\" (click)=\"mix()\">Rum\n          </label>\n          <label class=\"radio-inline\">\n            <input type=\"radio\" name=\"base\" [(ngModel)]=\"base\" value=\"vodka\" (click)=\"mix()\">Vodka\n          </label>\n          <label class=\"radio-inline\">\n            <input type=\"radio\" name=\"base\" [(ngModel)]=\"base\" value=\"ginebra\" (click)=\"mix()\">Gin\n          </label>\n        </div>\n        <div>\n          <label class=\"radio-inline\">\n            <input type=\"radio\" name=\"second\" [(ngModel)]=\"second\" value=\"cola\" (click)=\"secondMix()\">Cola\n          </label>\n          <label class=\"radio-inline\">\n            <input type=\"radio\" name=\"second\" [(ngModel)]=\"second\" value=\"fanta\" (click)=\"secondMix()\">Fanta\n          </label>\n          <label class=\"radio-inline\">\n            <input type=\"radio\" name=\"second\" [(ngModel)]=\"second\" value=\"tonica\" (click)=\"secondMix()\">Tonic\n          </label>\n          <label class=\"radio-inline\">\n            <input type=\"radio\" name=\"second\" [(ngModel)]=\"second\" value=\"campari\" (click)=\"secondMix()\">Campari\n          </label>\n        </div>\n        <div>\n          <label class=\"radio-inline\">\n            <input type=\"radio\" name=\"third\" [(ngModel)]=\"third\" value=\"agua\" (click)=\"cocktail()\">Water\n          </label>\n          <label class=\"radio-inline\">\n            <input type=\"radio\" name=\"third\" [(ngModel)]=\"third\" value=\"hielo\" (click)=\"cocktail()\">Ice\n          </label>\n          <label class=\"radio-inline\">\n            <input type=\"radio\" name=\"third\" [(ngModel)]=\"third\" value=\"azucar\" (click)=\"cocktail()\">Sugar\n          </label>\n          <label class=\"radio-inline\">\n            <input type=\"radio\" name=\"third\" [(ngModel)]=\"third\" value=\"martiniRosso\" (click)=\"cocktail()\">Martini\n          </label>\n        </div>\n        <div id=\"map-button\">\n          <button type=\"button\" class=\"btn btn-default\" [routerLink]=\"['../map']\">map with the best places to have a cocktail in Madrid</button>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-4\">\n      <div class=\"drinks\">\n        <img src=\"{{srcImg}}\" alt=\"{{srcImg}}\">\n      </div>\n    </div>\n    <div class=\"col-md-4\">\n      <p id=\"nombre-bebida\">{{name}}</p>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/catalog/catalog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatalogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CatalogComponent = /** @class */ (function () {
    function CatalogComponent() {
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
        this.negroni = "https://1.bp.blogspot.com/-IldHWi_mUl0/UJza_FCw4BI/AAAAAAAAATg/mXhswiOkQVI/s1600/negroni.png";
    }
    CatalogComponent.prototype.ngOnInit = function () { };
    CatalogComponent.prototype.mix = function () {
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
    };
    CatalogComponent.prototype.secondMix = function () {
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
    };
    CatalogComponent.prototype.cocktail = function () {
        if (this.base === "ginebra" &&
            this.second === "tonica" &&
            this.third === "hielo") {
            this.srcImg = this.gintonicImg;
            this.name = "Gin Tonic";
        }
        if (this.base === "vodka" &&
            this.second === "fanta" &&
            this.third === "azucar") {
            this.srcImg = this.cosmoImg;
            this.name = "Cosmopolitan";
        }
        if (this.base === "ron" &&
            this.second === "cola" &&
            this.third === "hielo") {
            this.srcImg = this.cubaLibreImg;
            this.name = "Cuba libre";
        }
        if (this.base === "ron" &&
            this.second === "cola" &&
            this.third === "agua") {
            this.srcImg = this.errorImg;
            this.name = "ERROR";
        }
        if (this.base === "ginebra" &&
            this.second === "campari" &&
            this.third === "martiniRosso") {
            this.srcImg = this.negroni;
            this.name = "Negroni";
        }
    };
    CatalogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-catalog",
            template: __webpack_require__("./src/app/catalog/catalog.component.html"),
            styles: [__webpack_require__("./src/app/catalog/catalog.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CatalogComponent);
    return CatalogComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".homeLogin{\n    margin-left: 70%;\n    border: 5px black solid\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"cover-content col-md-6\">\n            <img src=\"http://www.farrieranddraper.ie/wp-content/themes/farrierdraper/images/drinksImage.png\" class=\"img-responsive\" alt=\"cover image\">\n        </div>\n        <div class=\"cover-content col-md-6\">\n            <button type=\"button\" class=\"btn btn-default btn-lg\" [routerLink]=\"['catalog']\">get your cocktail</button>\n            <br/>\n            <br/>\n            <p class=\"lead\"><b>thirsty?</b> <br/> click on the above button<br/> to start mixing your<br/> favorite cocktail<br/><br/> <span>🥃 🍸 🍹</span></p>\n        </div>\n    </div>\n</div>\n<!-- <a [routerLink]=\"['home']\">Home </a>\n<a [routerLink]=\"['map']\">Map </a> -->"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login-form/login-form.component.css":
/***/ (function(module, exports) {

module.exports = ".error{\n    background-color:red;\n    color: white;\n    padding: 10px;\n    border: 1px solid black;\n    border-radius: 5px;\n}"

/***/ }),

/***/ "./src/app/login-form/login-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div *ngIf=\"!session.getUser()\">\n    <form class=\"form-horizontal\">\n      <h2> Log in / Sign up </h2>\n      <div class=\"form-group\">\n        <div class=\"col-sm-4\">\n          <input class=\"form-control\" id=\"inputEmail3\" placeholder=\"Username\" type=\"text\" [(ngModel)]=\"username\" name=\"username\" />\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"col-sm-4\">\n          <input type=\"password\" class=\"form-control\" id=\"inputPassword3\" placeholder=\"Password\" [(ngModel)]=\"password\" name=\"password\"\n          />\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"col-sm-4\">\n          <button type=\"submit\" class=\"btn btn-default\" (click)=\"login()\"> Log In </button>\n          <button type=\"submit\" class=\"btn btn-default\" (click)=\"login()\"> Sign Up </button>\n        </div>\n      </div>\n    </form>\n    <p *ngIf=\"error\" class=\"error\"> {{ error }} </p>\n  </div>\n\n  <div *ngIf=\"session.getUser()\">\n    <pre> {{ session.getUser() | json }} </pre>\n    <button (click)=\"logout()\"> Logout </button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/login-form/login-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_session_service__ = __webpack_require__("./src/services/session.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginFormComponent = /** @class */ (function () {
    function LoginFormComponent(router, session) {
        this.router = router;
        this.session = session;
    }
    LoginFormComponent.prototype.ngOnInit = function () { };
    LoginFormComponent.prototype.login = function () {
        var _this = this;
        this.session
            .login(this.username, this.password)
            .catch(function (e) { return (_this.error = e); })
            .subscribe(function (user) { return console.log("Welcome " + user.username); });
    };
    LoginFormComponent.prototype.signup = function () {
        var _this = this;
        this.session
            .signup(this.username, this.password)
            .catch(function (e) { return (_this.error = e); })
            .subscribe();
    };
    LoginFormComponent.prototype.logout = function () {
        var _this = this;
        this.session
            .logout()
            .catch(function (e) { return (_this.error = e); })
            .subscribe();
    };
    LoginFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: "app-login-form",
            template: __webpack_require__("./src/app/login-form/login-form.component.html"),
            styles: [__webpack_require__("./src/app/login-form/login-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__services_session_service__["a" /* SessionService */]])
    ], LoginFormComponent);
    return LoginFormComponent;
}());



/***/ }),

/***/ "./src/app/map/map.component.css":
/***/ (function(module, exports) {

module.exports = "agm-map {\n    height: 800px;\n  }\n"

/***/ }),

/***/ "./src/app/map/map.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\">\n    <agm-marker [latitude]=\"latM1\" [longitude]=\"lngM1\"></agm-marker>\n    <agm-marker [latitude]=\"latM2\" [longitude]=\"lngM2\"></agm-marker>\n    <agm-marker [latitude]=\"latM3\" [longitude]=\"lngM3\"></agm-marker>\n    <agm-marker [latitude]=\"latM4\" [longitude]=\"lngM4\"></agm-marker>\n    <agm-marker [latitude]=\"latM5\" [longitude]=\"lngM5\"></agm-marker>\n    <agm-marker [latitude]=\"latM6\" [longitude]=\"lngM6\"></agm-marker>\n  </agm-map>\n</div>"

/***/ }),

/***/ "./src/app/map/map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MapComponent = /** @class */ (function () {
    function MapComponent() {
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
    MapComponent.prototype.ngOnInit = function () {
    };
    MapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-map',
            template: __webpack_require__("./src/app/map/map.component.html"),
            styles: [__webpack_require__("./src/app/map/map.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    BASE_URL: ""
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/services/session.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SessionService = /** @class */ (function () {
    function SessionService(http) {
        this.http = http;
        this.BASE_URL = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].BASE_URL;
        this.options = { withCredentials: true };
        this.isLoggedIn().subscribe();
    }
    // private userEvent : EventEmitter;
    SessionService.prototype.getUser = function () {
        return this.user;
    };
    // getUserEvent(){
    //   return this.userEvent;
    // }
    SessionService.prototype.configureUser = function (set) {
        var _this = this;
        if (set === void 0) { set = false; }
        return function (user) {
            if (set) {
                _this.user = user;
                console.log("Setting user, welcome " + _this.user.username);
            }
            else {
                console.log("bye bye " + _this.user.username);
                _this.user = null;
            }
            return user;
        };
    };
    SessionService.prototype.handleError = function (e) {
        console.log(e);
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["a" /* Observable */].throw(e.json().message);
    };
    SessionService.prototype.signup = function (username, password) {
        return this.http.post(this.BASE_URL + "/api/auth/signup", { username: username, password: password }, this.options)
            .map(function (res) { return res.json(); })
            .map(this.configureUser(true))
            .catch(this.handleError);
    };
    SessionService.prototype.login = function (username, password) {
        return this.http.post(this.BASE_URL + "/api/auth/login", { username: username, password: password }, this.options)
            .map(function (res) { return res.json(); })
            .map(this.configureUser(true))
            .catch(this.handleError);
    };
    SessionService.prototype.logout = function () {
        return this.http.get(this.BASE_URL + "/api/auth/logout", this.options)
            .map(function (res) { return res.json(); })
            .map(this.configureUser(false))
            .catch(this.handleError);
    };
    SessionService.prototype.isLoggedIn = function () {
        return this.http.get(this.BASE_URL + "/api/auth/loggedin", this.options)
            .map(function (res) { return res.json(); })
            .map(this.configureUser(true))
            .catch(this.handleError);
    };
    SessionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], SessionService);
    return SessionService;
}());



/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map