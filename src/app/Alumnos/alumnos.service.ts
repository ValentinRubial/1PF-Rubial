import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';
import { Alumno } from './alumno.model';

@Injectable({
   providedIn: 'root'
})
export class AlumnoService {
   private alumnos: Alumno[] = [
      { id: 1, nombre: 'Juan', apellido: 'Perez', edad: 21, curso: 'Matemáticas' },
      { id: 2, nombre: 'Maria', apellido: 'Lopez', edad: 22, curso: 'Historia' },
      { id: 3, nombre: 'Mabel', apellido: 'Rodriguez', edad: 21, curso: 'Lengua' },
      { id: 4, nombre: 'Jesus', apellido: 'Alvaro', edad: 20, curso: 'Programacion' },
      { id: 5, nombre: 'Federico', apellido: 'Sanches', edad: 21, curso: 'Economia' },
      { id: 6, nombre: 'Ivan', apellido: 'Garcia', edad: 22, curso: 'Musica' },
      { id: 7, nombre: 'Santiago', apellido: 'Moran', edad: 22, curso: 'Psicologia' },
      { id: 8, nombre: 'Ignacio', apellido: 'Marshal', edad: 22, curso: 'Lengua' },
      { id: 9, nombre: 'Tomas', apellido: 'Zapata', edad: 20, curso: 'Ciencia' },
      { id: 10, nombre: 'Mateo', apellido: 'Gallardo', edad: 20, curso: 'Biologia' },
   ];

   private alumnosSubject = new BehaviorSubject<Alumno[]>(this.alumnos);
   alumnos$ = this.alumnosSubject.asObservable();

   getAlumnosObservable() {
      return this.alumnosSubject.asObservable();
   }

   agregarAlumno(alumno: Alumno): void {
      this.alumnos.push(alumno);
      this.alumnosSubject.next([...this.alumnos]);
   }

   eliminarAlumno(id: number): void {
      this.alumnos = this.alumnos.filter((alumno) => alumno.id !== id);
      this.alumnosSubject.next([...this.alumnos]);
   }
}
