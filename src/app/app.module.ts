import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { APP_ROUTING } from './app.router';

import { AppComponent } from './app.component';
import { PieComponent } from './components/pie/pie.component';
import { MenuComponent } from './components/menu/menu.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { BeneficiosComponent } from './pages/beneficios/beneficios.component';
import { CaracteristicasComponent } from './pages/caracteristicas/caracteristicas.component';
import { DescargasComponent } from './pages/descargas/descargas.component';
import { PlanesComponent } from './pages/planes/planes.component';
import { Error404Component } from './pages/error-404/error-404.component';


@NgModule({
  declarations: [
    AppComponent,
    PieComponent,
    MenuComponent,
    InicioComponent,
    BeneficiosComponent,
    CaracteristicasComponent,
    DescargasComponent,
    PlanesComponent,
    Error404Component
  ],
  imports: [
    APP_ROUTING,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
