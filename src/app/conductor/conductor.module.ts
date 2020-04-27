import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarConductorComponent } from './listar-Conductor/listar-Conductor.component';
import { ConductorDetailComponent } from './conductor-detail/conductor-detail.component';
import { conductorRoutingModule } from './conductor-routing.module';

@NgModule({
  imports: [
    CommonModule, conductorRoutingModule
  ],
  declarations: [ListarConductorComponent, ConductorDetailComponent],
  exports:[ListarConductorComponent]
})
export class ConductorModule { }
