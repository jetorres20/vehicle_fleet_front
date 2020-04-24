import { Component, OnInit, Input } from '@angular/core';
import { Registro } from '../Registro';

@Component({
  selector: 'app-registroDetail',
  templateUrl: './registroDetail.component.html',
  styleUrls: ['./registroDetail.component.css']
})
export class RegistroDetailComponent implements OnInit {

  @Input() registroDetalle: Registro;
  constructor() { }

  ngOnInit() {
    console.log(this.registroDetalle.id);
  }

}
