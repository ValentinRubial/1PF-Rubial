// alumnos.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map } from 'rxjs/operators';
import * as AlumnosActions from './alumnos.actions';
import { AlumnoService } from './alumnos.service';
import { Alumno } from './alumno.model'; 

@Injectable()
export class AlumnosEffects {
   loadAlumnos$ = createEffect(() =>
      this.actions$.pipe(
         ofType(AlumnosActions.loadAlumnos),
         mergeMap(() =>
            this.alumnoService.alumnos$.pipe(
               map((alumnos: Alumno[]) => AlumnosActions.alumnosLoaded({ alumnos }))
            )
         )
      )
   );

   constructor(private actions$: Actions, private alumnoService: AlumnoService) { }
}
