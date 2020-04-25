import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PracticaComponent } from './Practica.component';

import { PracticaDetailComponent } from './practicaDetail/practicaDetail.component';

const routes: Routes = [{
    path: 'practicas',
    children: [
      {
        path: 'list',
        component: PracticaComponent
      },
      {
        path: ':id',
        component: PracticaDetailComponent    
      },
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PracticaRoutingModule { }