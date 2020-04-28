import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UniversidadListComponent } from './universidad-list/universidad-list.component';
import { UniversidadDetailComponent } from './universidad-detail/universidad-detail.component';

const routes: Routes = [{
    path: 'universidad',
    children: [
      {
        path: 'list',
        component: UniversidadListComponent
      },
      {
        path: ':id',
        component: UniversidadDetailComponent
      },
    ]
  }];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class UniversidadRoutingModule { }