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
import { AlumnoService } from './Alumnos/alumnos.service';
import { AbmAlumnoComponent } from './Alumnos/abm-alumnos/abm-alumnos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ToolBarComponent,
    ListaAlumnosComponent,
    AbmAlumnoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatTableModule
  ],
  providers: [AlumnoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
