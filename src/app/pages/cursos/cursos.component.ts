import { Component, OnInit } from '@angular/core';
import { MateriaService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {
  materias: string[] = [];

  constructor(private materiaService: MateriaService) { }

  ngOnInit() {
    this.materiaService.getMaterias().subscribe((materias) => {
      this.materias = materias;
    });
  }
}
