import { Component, OnInit } from '@angular/core';
import{Profesor} from './Profesor';
import {ListarProfesorService} from './listarProfesor.service'
@Component({
  selector: 'app-Profesor',
  templateUrl: './Profesor.component.html',
  styleUrls: ['./Profesor.component.css']
})
export class ProfesorComponent implements OnInit {

  constructor(private listarProfesorService: ListarProfesorService) { }
  public profesores: Array<Profesor>;
  getProfesores()
  {
    this.listarProfesorService.getProfesores().subscribe(cs => {
      this.profesores = cs;
    });
    
  }
  ngOnInit() {
    this.getProfesores();
  }

}