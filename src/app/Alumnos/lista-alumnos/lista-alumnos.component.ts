// lista-alumnos.component.ts
import { Component } from '@angular/core';
import { AlumnoService } from '../alumnos.service';
import { Alumno } from '../alumno.model';
import { Pipe, PipeTransform } from '@angular/core';
import { Directive, ElementRef, Renderer2, Input, TemplateRef, ViewContainerRef } from '@angular/core';


@Directive({
  selector: '[appFontSize]'
})
export class FontSizeDirective {
  @Input('appFontSize') size: string = '20px';

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnChanges() {
    this.renderer.setStyle(this.el.nativeElement, 'font-size', this.size);
  }
}

@Pipe({
  name: 'nombreCompleto'
})
export class NombreCompletoPipe implements PipeTransform {
  transform(alumno: Alumno): string {
    return `${alumno.nombre} ${alumno.apellido}`;
  }
}

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  
  //aplique los estilos aqui ya que no podeia aplicarlos en el scss
  styles: [
    `
    .mat-elevation-z2 {
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }
    .custom-header-cell {
      background-color: #00796B;
      color: white;
    }
    .custom-cell {
      font-weight: bold;
    }
    .custom-header-row {
      background-color: rgb(26, 119, 189);
      color: white;
    }
    .custom-row {
      background-color: #E8F5E9;
    }
    `
  ],
})
export class ListaAlumnosComponent {
  displayedColumns: string[] = ['nombre', 'apellido', 'curso'];
  alumnos: Alumno[] = this.alumnoService.getAlumnos().slice(0, 10);
  constructor(private alumnoService: AlumnoService) { }
}