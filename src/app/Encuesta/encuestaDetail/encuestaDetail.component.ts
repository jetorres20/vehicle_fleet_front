import { Component, OnInit, Input } from '@angular/core';
import { Encuesta } from '../Encuesta';

@Component({
  selector: 'app-encuestaDetail',
  templateUrl: './encuestaDetail.component.html',
  styleUrls: ['./encuestaDetail.component.css']
})
export class EncuestaDetailComponent implements OnInit {

  @Input() encuestaDetail: Encuesta;

  
  constructor() { }

  ngOnInit() {
  }

 

}
