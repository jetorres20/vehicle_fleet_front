import { Component, OnInit } from '@angular/core';
import{Registro} from './Registro';
import { ListarRegistroService } from './listarRegistro.service';

@Component({
  selector: 'app-Registro',
  templateUrl: './Registro.component.html',
  styleUrls: ['./Registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private listarRegistroService:ListarRegistroService) { }
  public registros : Array<Registro>;
  selected = false;
  selectedRegistro: Registro;

  getRegistroList() {
    this.listarRegistroService.getRegistros().subscribe(cs => {
      this.registros = cs;
    });
  }

  onSelected(r: Registro): void {
    this.selected = true;
    this.selectedRegistro = r;
  }

  ngOnInit() {
    this.getRegistroList();
  }

}
