import { Component, OnInit, Input } from '@angular/core';
import { UniversidadDetail } from '../universidadDetail';
@Component({
  selector: 'app-universidad-detail',
  templateUrl: './universidad-detail.component.html',
  styleUrls: ['./universidad-detail.component.css']
})
export class UniversidadDetailComponent implements OnInit {

  @Input() universidadDetail:UniversidadDetail

  constructor() { }

  ngOnInit() {
  }

}
