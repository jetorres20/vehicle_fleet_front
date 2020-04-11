import { Component, OnInit } from '@angular/core';
import{Practica} from './Practica';
import {ListarPracticaService} from './listarPractica.service'
@Component({
  selector: 'app-Practica',
  templateUrl: './Practica.component.html',
  styleUrls: ['./Practica.component.css']
})
export class PracticaComponent implements OnInit {

  constructor(private listarPracticaService: ListarPracticaService) { }
  public practicas: Array<Practica>;
  getPracticas()
  {
    this.listarPracticaService.getPracticas().subscribe(cs => {
      this.practicas = cs;
    });
    
  }
  ngOnInit() {
    this.getPracticas();
  }

}