import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistroComponent } from './Registro.component';

import { RegistroDetailComponent } from './registroDetail/registroDetail.component';

const routes: Routes = [{
    path: 'registros',
    children: [
      {
        path: 'list',
        component: RegistroComponent
      },
      {
        path: ':id',
        component: RegistroDetailComponent    
      },
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistroRoutingModule { }
