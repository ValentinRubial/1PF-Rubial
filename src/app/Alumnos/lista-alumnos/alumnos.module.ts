import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { alumnosReducer } from '../alumnos.reducer';
import { AlumnosEffects } from '../alumnos.effects';

@NgModule({
   imports: [
      StoreModule.forFeature('alumnos', alumnosReducer),
      EffectsModule.forFeature([AlumnosEffects]),
   ],
})
export class AlumnosModule { }