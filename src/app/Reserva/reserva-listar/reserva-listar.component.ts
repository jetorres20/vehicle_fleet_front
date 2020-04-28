import { Component, OnInit } from '@angular/core';
import { Reserva } from '../Reserva';
import { ReservaService } from '../Reserva.service';

@Component({
  selector: 'app-reserva-listar',
  templateUrl: './reserva-listar.component.html',
  styleUrls: ['./reserva-listar.component.css']
})
export class ReservaListarComponent implements OnInit {

  selected = false;
  selectedReserva : Reserva;

  constructor(private reservaService: ReservaService) { }
  private reservas: Array<Reserva>;
  ngOnInit() {
    this.getReservas()
  }

  getReservas(): void {
    this.reservaService.getReservas()
      .subscribe(r => {
        this.reservas = r;
      });
  }

  onSelected(b: Reserva): void{
    this.selected = true;
    this.selectedReserva = b;
  }

}
