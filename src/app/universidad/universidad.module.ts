import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UniversidadListComponent } from './universidad-list/universidad-list.component';
import { UniversidadDetailComponent } from './universidad-detail/universidad-detail.component';
import { UniversidadRoutingModule } from './universidad-routing.module';

@NgModule({
  imports: [
    CommonModule,UniversidadRoutingModule
  ],
  declarations: [UniversidadListComponent,UniversidadDetailComponent],
  exports:[UniversidadListComponent]
})
export class UniversidadModule { }
