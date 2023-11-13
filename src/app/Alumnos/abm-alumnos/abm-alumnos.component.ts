import { Component, OnInit } from '@angular/core';
import { Alumno } from '../alumno.model';
import { AlumnoService } from '../alumnos.service';

const nuevoAlumno: Alumno = {
   id: 1,
   nombre: 'Nombre',
   apellido: 'Apellido',
   edad: 1,
   curso: 'Curso',
};

@Component({
   selector: 'app-abm-alumnos',
   templateUrl: './abm-alumnos.component.html',
   styleUrls: ['./abm-alumnos.component.scss']
})
   
export class AbmAlumnosComponent implements OnInit {
  alumnos: Alumno[] = [];
  nuevoAlumno: Alumno = { id: null, nombre: '', apellido: '', edad: null, curso: '' };

  constructor(private alumnoService: AlumnoService) {}

  ngOnInit(): void {
    this.alumnoService.alumnos$.subscribe((alumnos) => {
      this.alumnos = alumnos;
    });
  }

   agregarAlumno(): void {
     console.log('agregarAlumno...')
    if (this.nuevoAlumno.nombre && this.nuevoAlumno.apellido && this.nuevoAlumno.curso) {

      this.nuevoAlumno.id = this.generateUniqueId();

      this.alumnoService.agregarAlumno(this.nuevoAlumno);

      this.nuevoAlumno = { id: null, nombre: '', apellido: '', edad: null, curso: '' };
    } else {
      alert('Por favor, complete los campos obligatorios.');
    }
  }

   eliminarAlumno(id: number | undefined): void {
      if (id !== undefined) {
         this.alumnoService.eliminarAlumno(id);
      }
   }

  private generateUniqueId(): number {
    return new Date().getTime();
  }
}
