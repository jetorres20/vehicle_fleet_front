import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PracticaComponent } from './Practica.component';
import { PracticaDetailComponent } from './practicadetail/practicadetail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PracticaComponent,PracticaDetailComponent],
  exports:[PracticaComponent]
})
export class PracticaModule { }