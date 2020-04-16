import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipoVehiculoListarComponent } from './tipoVehiculo-listar/tipoVehiculo-listar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TipoVehiculoListarComponent],
  exports:[TipoVehiculoListarComponent]
})
export class TipoVehiculoModule { }
