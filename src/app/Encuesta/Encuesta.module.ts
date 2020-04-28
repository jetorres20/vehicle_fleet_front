import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EncuestaComponent } from './Encuesta.component';
import { EncuestaDetailComponent } from './encuestaDetail/encuestaDetail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EncuestaComponent, EncuestaDetailComponent],
  exports: [EncuestaComponent]
})
export class EncuestaModule { }
