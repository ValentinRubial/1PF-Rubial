// AlumnosComponent.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Alumno } from './alumno.model';

@Injectable({
   providedIn: 'root'
})
   
export class AlumnoService {
   private apiUrl = 'https://6564fb0eceac41c0761f19c5.mockapi.io/api/v1/Alumno'; 

   private alumnos: Alumno[] = [];

   private alumnosSubject = new BehaviorSubject<Alumno[]>(this.alumnos);
   alumnos$ = this.alumnosSubject.asObservable();

   constructor(private httpClient: HttpClient) { }

   getAlumnosObservable() {
      this.httpClient.get<Alumno[]>(this.apiUrl).subscribe((alumnos) => {
         this.alumnos = alumnos;
         this.alumnosSubject.next([...this.alumnos]);
      });

      return this.alumnosSubject.asObservable();
   }

   agregarAlumno(alumno: Alumno): void {
      this.httpClient.post<Alumno>(this.apiUrl, alumno).subscribe((nuevoAlumno) => {
         this.alumnos.push(nuevoAlumno);
         this.alumnosSubject.next([...this.alumnos]);
      });
   }

   eliminarAlumno(id: number): void {
      this.httpClient.delete(`${this.apiUrl}/${id}`).subscribe(() => {
         this.alumnos = this.alumnos.filter((alumno) => alumno.id !== id);
         this.alumnosSubject.next([...this.alumnos]);
      });
   }
   resetState(): void {
      
   }
}
