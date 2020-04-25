import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfesorComponent } from './Profesor.component';

const routes: Routes = [{
  path: 'profesores',
  children: [

    {
      path: 'list',
      component: ProfesorComponent
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfesorRoutingModule { }