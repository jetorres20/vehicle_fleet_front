import { Component, OnInit } from '@angular/core';
import { Encuesta } from './Encuesta';
import { ListarEncuestaService } from './listarEncuesta.service';

@Component({
  selector: 'app-Encuesta',
  templateUrl: './Encuesta.component.html',
  styleUrls: ['./Encuesta.component.css']
})
export class EncuestaComponent implements OnInit {

  private encuestas: Array<Encuesta>;
  constructor(private listarEncuestasService: ListarEncuestaService) { }
  getEncuestas() {
    this.listarEncuestasService.getEncuestas().subscribe(cs => {
      this.encuestas = cs;
    });
  }
  ngOnInit() {
    this.getEncuestas();
  }

}
