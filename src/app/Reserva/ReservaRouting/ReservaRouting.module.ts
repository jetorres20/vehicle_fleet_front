import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReservaListarComponent } from '../reserva-listar/reserva-listar.component';
import { ReservaDetailComponent } from '../reserva-detail/reserva-detail.component';


const routes: Routes = [{
  path: 'reservas',
  children: [
    {
      path: 'list',
      component: ReservaListarComponent
    },
    {
      path: ':id',
      component: ReservaDetailComponent     
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ReservaRoutingModule{}
