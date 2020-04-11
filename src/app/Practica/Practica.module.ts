import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PracticaComponent } from './Practica.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PracticaComponent],
  exports:[PracticaComponent]
})
export class PracticaModule { }