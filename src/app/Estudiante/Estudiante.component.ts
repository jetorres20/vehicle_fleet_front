import { Component, OnInit } from '@angular/core';
import { ListarEstudianteService } from './listarEstudiante.service';
import { EstudianteDetalle } from './estudianteDetalle';
@Component({
  selector: 'app-Estudiante',
  templateUrl: './Estudiante.component.html',
  styleUrls: ['./Estudiante.component.css']
})
export class EstudianteComponent implements OnInit {

  constructor(private listarEstudianteService: ListarEstudianteService) { }
  private estudiantes: Array<EstudianteDetalle>;
  selected = false;
  selectedStudent: EstudianteDetalle;

  getEstudiantes(){
    this.listarEstudianteService.getEstudiantes().subscribe(cs => {
      this.estudiantes = cs;
    });
  }
  ngOnInit() {
    this.getEstudiantes();
  }

  onSelected(s:EstudianteDetalle): void{
    this.selected = true;
    this.selectedStudent = s;
  }
}
