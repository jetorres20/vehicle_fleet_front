import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipoVehiculoListarComponent } from './tipoVehiculo-listar/tipoVehiculo-listar.component';
import { TipoVehiculoRoutingModule } from './TipoVehiculoRouting/TipoVehiculoRouting.module';
import { TipoVehiculoDetailComponent } from './tipoVehiculoDetail/tipoVehiculoDetail.component';

@NgModule({
  imports: [
    CommonModule,
    TipoVehiculoRoutingModule
  ],
  declarations: [TipoVehiculoListarComponent, TipoVehiculoDetailComponent],
  exports:[TipoVehiculoListarComponent]
})
export class TipoVehiculoModule { }
