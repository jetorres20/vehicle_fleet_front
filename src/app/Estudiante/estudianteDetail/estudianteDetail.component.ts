import { Component, OnInit, Input } from '@angular/core';
import { EstudianteDetalle } from '../estudianteDetalle';

@Component({
  selector: 'app-estudianteDetail',
  templateUrl: './estudianteDetail.component.html',
  styleUrls: ['./estudianteDetail.component.css']
})
export class EstudianteDetailComponent implements OnInit {

  @Input() estudianteDetail: EstudianteDetalle;
  constructor() { }

  ngOnInit() {
    console.log(this.estudianteDetail.id)
  }

}
