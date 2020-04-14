import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarConductorComponent } from './listar-Conductor/listar-Conductor.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListarConductorComponent],
  exports:[ListarConductorComponent]
})
export class ConductorModule { }
