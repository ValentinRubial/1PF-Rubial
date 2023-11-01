// Cree estos botones pero creo que al final usare los enlaces 

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enlaces',
  template: `
    <button (click)="navegarAAlumnos()">Ir a la página de Alumnos</button>
    <button (click)="navegarACursos()">Ir a la página de Cursos</button>
    <button (click)="navegarANosotros()">Ir a la página de Nosotros</button>
  `,
})

export class EnlacesComponent {
  constructor(private router: Router) { }

  navegarAAlumnos() {
    this.router.navigate(['/alumnos']);
  }

  navegarACursos() {
    this.router.navigate(['/cursos']);
  }

  navegarANosotros() {
    this.router.navigate(['/nosotros']);
  }
}
