import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarAgendaComponent } from './listar-Agenda/listar-Agenda.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListarAgendaComponent],
  exports: [ListarAgendaComponent]
})
export class AgendaModule { }
