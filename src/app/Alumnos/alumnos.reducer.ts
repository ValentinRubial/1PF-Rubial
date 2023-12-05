import { createReducer, on } from '@ngrx/store';
import * as AlumnosActions from './alumnos.actions';
import { AlumnosState } from './alumnos.state';

export const initialState: AlumnosState = {
   alumnos: [],
};

export const alumnosReducer = createReducer(
   initialState,
   on(AlumnosActions.alumnosLoaded, (state, { alumnos }) => ({ ...state, alumnos })),
   on(AlumnosActions.addAlumno, (state, { alumno }) => ({ ...state, alumnos: [...state.alumnos, alumno] })),
   on(AlumnosActions.deleteAlumno, (state, { id }) => ({ ...state, alumnos: state.alumnos.filter(a => a.id !== id) }))
);