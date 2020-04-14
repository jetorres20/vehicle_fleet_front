import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EncuestaComponent } from './Encuesta.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EncuestaComponent],
  exports: [EncuestaComponent]
})
export class EncuestaModule { }
