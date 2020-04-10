import { Component, OnInit } from '@angular/core';
import{Vehiculo} from './Vehiculo';
import {ListarVehiculosService} from './listarVehiculos.service'
@Component({
  selector: 'app-Vehiculo',
  templateUrl: './Vehiculo.component.html',
  styleUrls: ['./Vehiculo.component.css']
})
export class VehiculoComponent implements OnInit {

  constructor(private listarVehiculosService: ListarVehiculosService) { }
  public vehiculos: Array<Vehiculo>;
  getVehiculos()
  {
    this.listarVehiculosService.getVehiculos().subscribe(cs => {
      this.vehiculos = cs;
    });
    
  }
  ngOnInit() {
    this.getVehiculos();
  }

}
