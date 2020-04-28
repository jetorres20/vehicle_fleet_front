import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservaListarComponent } from './reserva-listar/reserva-listar.component';
import { ReservaDetailComponent } from './reserva-detail/reserva-detail.component';
import { ReservaRoutingModule } from './ReservaRouting/ReservaRouting.module';

@NgModule({
  imports: [
    CommonModule,
    ReservaRoutingModule
  ],
  declarations: [ReservaListarComponent, ReservaDetailComponent],
  exports:[ReservaListarComponent]
})
export class ReservaModule { }
