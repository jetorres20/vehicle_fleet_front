import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './Registro.component';
import { RegistroDetailComponent } from './registroDetail/registroDetail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RegistroComponent, RegistroDetailComponent],
  exports: [RegistroComponent]
})
export class RegistroModule { }
