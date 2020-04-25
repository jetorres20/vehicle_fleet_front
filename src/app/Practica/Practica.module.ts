import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PracticaComponent } from './Practica.component';
import { PracticaDetailComponent } from './practicadetail/practicadetail.component';
import { PracticaRoutingModule} from './practica-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PracticaRoutingModule
  ],
  declarations: [PracticaComponent,PracticaDetailComponent],
  exports:[PracticaComponent]
})
export class PracticaModule { }