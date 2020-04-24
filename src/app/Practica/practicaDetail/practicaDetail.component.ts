import { Component, OnInit, Input } from '@angular/core';
import { Practica } from '../Practica';

@Component({
  selector: 'app-PracticaDetail',
  templateUrl: './practicaDetail.component.html',
  styleUrls: ['./practicaDetail.component.css']
})
export class PracticaDetailComponent implements OnInit {

  @Input() practicaDetail: Practica;

  constructor() { }

  ngOnInit() {
    console.log(this.practicaDetail.id);
  }

}
