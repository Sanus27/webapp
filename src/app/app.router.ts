import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { BeneficiosComponent } from './pages/beneficios/beneficios.component';
import { CaracteristicasComponent } from './pages/caracteristicas/caracteristicas.component';
import { DescargasComponent } from './pages/descargas/descargas.component';
import { PlanesComponent } from './pages/planes/planes.component';
import { Error404Component } from './pages/error-404/error-404.component';

const APP_ROUTES: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'beneficios', component: BeneficiosComponent },
  { path: 'caracteristicas', component: CaracteristicasComponent },
  { path: 'descargas', component: DescargasComponent },
  { path: 'planes', component: PlanesComponent },
  { path: 'error404', component: Error404Component },
  { path: '**', pathMatch: 'full', redirectTo: 'error404' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
