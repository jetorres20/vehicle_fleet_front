import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstudianteComponent } from './Estudiante.component';
import { EstudianteDetailComponent } from './estudianteDetail/estudianteDetail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EstudianteComponent, EstudianteDetailComponent],
  exports:[EstudianteComponent]
})
export class EstudianteModule { }
