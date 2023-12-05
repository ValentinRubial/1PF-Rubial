import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { AlumnosComponent } from './pages/alumnos/alumnos.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { CreateAccountComponent } from './pages/create-account/create-account.component';



const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'create-account', component: CreateAccountComponent},
  { path: 'alumnos', component: AlumnosComponent,  },
  { path: 'cursos', component: CursosComponent },
  { path: 'nosotros', component: NosotrosComponent },

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: LoginComponent }, // Manejo de rutas no encontradas
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

