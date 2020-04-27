import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TipoVehiculoRoutingComponent } from './TipoVehiculoRouting.component';
import { TipoVehiculoDetailComponent } from '../tipoVehiculoDetail/tipoVehiculoDetail.component';
import { TipoVehiculoListarComponent } from '../tipoVehiculo-listar/tipoVehiculo-listar.component';

const routes: Routes = [{
  path: 'tipoVehiculos',
  children: [
    {
      path: 'list',
      component: TipoVehiculoListarComponent
    },
    {
      path: ':id',
      component: TipoVehiculoDetailComponent    
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipoVehiculoRoutingModule { }
