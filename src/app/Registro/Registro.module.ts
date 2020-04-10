import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './Registro.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RegistroComponent],
  exports: [RegistroComponent]
})
export class RegistroModule { }
