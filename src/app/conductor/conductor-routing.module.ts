import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarConductorComponent } from './listar-Conductor/listar-Conductor.component'; 
import { ConductorDetailComponent } from './conductor-detail/conductor-detail.component';


const routes: Routes = [{
  path: 'conductores',
  children: [
    {
      path: 'list',
      component: ListarConductorComponent
    },
    {
      path: ':id',
      component: ConductorDetailComponent
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }