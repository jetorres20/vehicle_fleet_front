import { Component, OnInit, Input } from '@angular/core';
import { TipoVehiculo } from '../tipoVehiculo';

@Component({
  selector: 'app-tipoVehiculoDetail',
  templateUrl: './tipoVehiculoDetail.component.html',
  styleUrls: ['./tipoVehiculoDetail.component.css']
})
export class TipoVehiculoDetailComponent implements OnInit {

  @Input() tipoVehiculoDetail: TipoVehiculo;

  constructor() { }

  ngOnInit() {
    console.log(this.tipoVehiculoDetail.tipoDeVehiculo);
  }

}
