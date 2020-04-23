import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarConductorComponent } from './listar-Conductor/listar-Conductor.component';
import { ConductorDetailComponent } from './conductor-detail/conductor-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListarConductorComponent, ConductorDetailComponent],
  exports:[ListarConductorComponent]
})
export class ConductorModule { }
