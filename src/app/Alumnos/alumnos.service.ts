import { Injectable } from '@angular/core';
import { Alumno } from './alumno.model';

@Injectable({
   providedIn: 'root'
})
export class AlumnoService {
   private alumnos: Alumno[] = [
      { id: 1, nombre: 'Juan', apellido: 'Perez', curso: 'Matemáticas' },
      { id: 2, nombre: 'Maria', apellido: 'Lopez', curso: 'Historia' },
      { id: 3, nombre: 'Mabel', apellido: 'Rodriguez', curso: 'Lengua' },
      { id: 4, nombre: 'Jesus', apellido: 'Alvaro', curso: 'Programacion' },
      { id: 5, nombre: 'Federico', apellido: 'Sanches', curso: 'Economia' },
      { id: 6, nombre: 'Ivan', apellido: 'Garcia', curso: 'Musica' },
      { id: 7, nombre: 'Santiago', apellido: 'Moran', curso: 'Psicologia' },
      { id: 8, nombre: 'Ignacio', apellido: 'Marshal', curso: 'Lengua' },
      { id: 9, nombre: 'Tomas', apellido: 'Zapata', curso: 'Ciencia' },
      { id: 10, nombre: 'Mateo', apellido: 'Gallardo', curso: 'Biologia' },
   ];

   getAlumnos(): Alumno[] {
      return this.alumnos;
   }
   constructor() { }
   agregarAlumno(alumno: Alumno) {
      this.alumnos.push(alumno);
   }
   
}
