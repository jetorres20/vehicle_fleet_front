import { Component, OnInit, Input } from '@angular/core';
import { Vehiculo } from '../Vehiculo';

@Component({
  selector: 'app-vehiculoDetail',
  templateUrl: './vehiculoDetail.component.html',
  styleUrls: ['./vehiculoDetail.component.css']
})
export class VehiculoDetailComponent implements OnInit {

  @Input() vehiculoDetail: Vehiculo;

  constructor() { }

  ngOnInit() {
    console.log(this.vehiculoDetail.id);
  }

}
