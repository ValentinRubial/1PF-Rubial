import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';
import { ToolBarComponent } from './layout/tool-bar/tool-bar.component';
import { ListaAlumnosComponent } from './Alumnos/lista-alumnos/lista-alumnos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { AlumnoService } from './Alumnos/alumnos.service';
import { AbmAlumnosComponent } from './Alumnos/abm-alumnos/abm-alumnos.component';
import { AlumnosComponent } from './pages/alumnos/alumnos.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { EnlacesComponent } from './pages/enlaces/enlaces.component';
import { LoginComponent } from './pages/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateAccountComponent } from './pages/create-account/create-account.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ToolBarComponent,
    ListaAlumnosComponent,
    AbmAlumnosComponent,
    AlumnosComponent,
    CursosComponent,
    NosotrosComponent,
    EnlacesComponent,
    LoginComponent,
    CreateAccountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatTableModule,
    MatCardModule,
    MatListModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AlumnoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
