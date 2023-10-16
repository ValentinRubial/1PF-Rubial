import { Component } from '@angular/core';
import { Alumno } from '../alumno.model';
import { AlumnoService } from '../alumnos.service';


const nuevoAlumno: Alumno = {
   id: 1,
   nombre: 'Nombre',
   apellido: 'Apellido',
   curso: 'Curso',
};

@Component({
   selector: 'app-abm-alumnos',
   templateUrl: './abm-alumnos.component.html',
   styleUrls: ['./abm-alumnos.component.scss']
})
   
export class AbmAlumnoComponent {
   nuevoAlumno: any = { nombre: '', apellido: '', curso: '' }; 
   constructor(public alumnoService: AlumnoService) { }

   agregarAlumno() {
      if (this.nuevoAlumno.nombre && this.nuevoAlumno.apellido && this.nuevoAlumno.curso) {
         this.alumnoService.agregarAlumno(this.nuevoAlumno);
         this.nuevoAlumno = { nombre: '', apellido: '', curso: '' };
      } else {
         alert('Por favor, complete todos los campos.');
      }
   }
}
