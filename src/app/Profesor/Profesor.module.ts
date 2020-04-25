import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfesorComponent } from './Profesor.component';
import { ProfesorRoutingModule} from './profesor-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ProfesorRoutingModule
  ],
  declarations: [ProfesorComponent],
  exports:[ProfesorComponent]
})
export class ProfesorModule { }