import { Component, OnInit } from '@angular/core';
import { Agenda } from '../Agenda';
import { AgendaService } from '../Agenda.service';

@Component({
  selector: 'app-listar-Agenda',
  templateUrl: './listar-Agenda.component.html',
  styleUrls: ['./listar-Agenda.component.css']
})
export class ListarAgendaComponent implements OnInit {

  constructor(private agendaService: AgendaService) { }
  public agendas: Array<Agenda>;
  getAgendas(): void{
    this.agendaService.getAgendas().subscribe(agendas => {
      this.agendas = agendas;
    });
  }
  ngOnInit() {
    this.getAgendas();
  }

}
