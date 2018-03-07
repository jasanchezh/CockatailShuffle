import { BrowserModule } from "@angular/platform-browser";
import { NgModule, ApplicationRef } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { HttpModule } from "@angular/http";
import { LoginFormComponent } from "./login-form/login-form.component";
import { SessionService } from "../services/session.service";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { MapComponent } from "./map/map.component";
import { CatalogComponent } from "./catalog/catalog.component";

import { AgmCoreModule } from "@agm/core";

const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: "", component: HomeComponent },
  { path: "login", component: LoginFormComponent },
  { path: "map", component: MapComponent },
  { path: "catalog", component: CatalogComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    HomeComponent,
    MapComponent,
    CatalogComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes),
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyAcTIMzYcZ8UhOpehf0rQfD-aZSbIfZYQ0"
    })
  ],
  providers: [SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
