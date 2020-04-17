import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservaListarComponent } from './reserva-listar/reserva-listar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ReservaListarComponent],
  exports:[ReservaListarComponent]
})
export class ReservaModule { }
