import { createAction, props } from '@ngrx/store';
import { Alumno } from './alumno.model';

export const loadAlumnos = createAction('[Alumnos] Load Alumnos');
export const alumnosLoaded = createAction('[Alumnos] Alumnos Loaded', props<{ alumnos: Alumno[] }>());

export const addAlumno = createAction('[Alumnos] Add Alumno', props<{ alumno: Alumno }>());
export const deleteAlumno = createAction('[Alumnos] Delete Alumno', props<{ id: number }>());