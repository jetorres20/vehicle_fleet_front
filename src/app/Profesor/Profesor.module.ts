import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfesorComponent } from './Profesor.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProfesorComponent],
  exports:[ProfesorComponent]
})
export class ProfesorModule { }