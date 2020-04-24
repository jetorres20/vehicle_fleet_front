import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiculoComponent } from './Vehiculo.component';
import {VehiculoDetailComponent} from './vehiculoDetail/vehiculoDetail.component';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [VehiculoComponent, VehiculoDetailComponent],
  exports:[VehiculoComponent]
})
export class VehiculoModule { }
