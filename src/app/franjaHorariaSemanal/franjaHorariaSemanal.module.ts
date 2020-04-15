import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FranjaHorariaSemanalComponent } from './franjaHorariaSemanal.component';

import { FranjaHorariaSemanalListComponent } from './franjaHorariaSemanal-list/franjaHorariaSemanal-list.component'
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FranjaHorariaSemanalComponent],
  exports:[FranjaHorariaSemanalListComponent]
})
export class FranjaHorariaSemanalModule { }
