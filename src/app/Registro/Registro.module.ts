import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './Registro.component';
import { RegistroDetailComponent } from './registroDetail/registroDetail.component';
import{RegistroRoutingModule} from './registro-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RegistroRoutingModule
  ],
  declarations: [RegistroComponent, RegistroDetailComponent],
  exports: [RegistroComponent]
})
export class RegistroModule { }
