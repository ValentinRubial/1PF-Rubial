import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnosComponent } from './pages/alumnos/alumnos.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';

const routes: Routes = [
  { path: 'alumnos', component: AlumnosComponent },
  { path: 'cursos', component: CursosComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: '', redirectTo: '/alumnos', pathMatch: 'full' }, // Ruta predeterminada
  { path: '**', component: AlumnosComponent }, // Manejo de rutas no encontradas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

