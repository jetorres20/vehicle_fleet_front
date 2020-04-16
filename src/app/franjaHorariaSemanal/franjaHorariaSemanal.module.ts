import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FranjaHorariaSemanalListComponent } from './franjaHorariaSemanal-list/franjaHorariaSemanal-list.component'
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FranjaHorariaSemanalListComponent],
  exports:[FranjaHorariaSemanalListComponent]
})
export class FranjaHorariaSemanalModule { }
