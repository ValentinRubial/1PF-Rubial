import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MateriaService {
  getMaterias(): Observable<string[]> {
    const materias = ['Matemática', 'Psicologia', 'Historia', 'Lengua', 'Biologia','Programacion', 'Ciencia', 'Economia'];
    return of(materias);
  }
}