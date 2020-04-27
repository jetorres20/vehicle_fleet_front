import { Component, OnInit } from '@angular/core';
import { TipoVehiculo } from '../tipoVehiculo';
import { TipoVehiculoService } from '../TipoVehiculo.service';

@Component({
  selector: 'app-tipoVehiculo-listar',
  templateUrl: './tipoVehiculo-listar.component.html',
  styleUrls: ['./tipoVehiculo-listar.component.css']
})
export class TipoVehiculoListarComponent implements OnInit {

  constructor(private tipoVehiculoService: TipoVehiculoService) { }
  private tipoVehiculos: Array<TipoVehiculo>;

  selected = false;
  selectedTipoVehiculo : TipoVehiculo;

  ngOnInit() {
    this.getTipoVehiculos()
  }

  getTipoVehiculos(): void {
    this.tipoVehiculoService.getTipoVehiculos()
      .subscribe(r => {
        this.tipoVehiculos = r;
      });
  }

  onSelected(b: TipoVehiculo): void{
    this.selected = true;
    this.selectedTipoVehiculo = b;
  }
}
