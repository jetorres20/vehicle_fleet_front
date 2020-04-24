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
  selectedPractica: Practica;
  selected = false;
  getPracticas()
  {
    this.listarPracticaService.getPracticas().subscribe(cs => {
      this.practicas = cs;
    });
    
  }
  onSelected(b: Practica): void {
    this.selected = true;
    this.selectedPractica = b;
  }
  ngOnInit() {
    this.getPracticas();
  }

}