import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VehiculoComponent } from './Vehiculo.component';

import { VehiculoDetailComponent } from './vehiculoDetail/vehiculoDetail.component';

const routes: Routes = [{
    path: 'vehiculos',
    children: [
      {
        path: 'list',
        component: VehiculoComponent
      },
      {
        path: ':id',
        component: VehiculoDetailComponent    
      },
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehiculoRoutingModule { }
