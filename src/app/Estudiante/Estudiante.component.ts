import { Component, OnInit } from '@angular/core';
import { Estudiante } from './Estudiante';
import { ListarEstudianteService } from './listarEstudiante.service';
@Component({
  selector: 'app-Estudiante',
  templateUrl: './Estudiante.component.html',
  styleUrls: ['./Estudiante.component.css']
})
export class EstudianteComponent implements OnInit {

  constructor(private listarEstudianteService: ListarEstudianteService) { }
  private estudiantes: Array<Estudiante>;
  getEstudiantes(){
    this.listarEstudianteService.getEstudiantes().subscribe(cs => {
      this.estudiantes = cs;
    });
  }
  ngOnInit() {
    this.getEstudiantes();
  }

}
