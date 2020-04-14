import { Component, OnInit } from '@angular/core';
import { conductor } from '../conductor';
import { ConductorService } from '../conductor.service';

@Component({
  selector: 'app-listar-Conductor',
  templateUrl: './listar-Conductor.component.html',
  styleUrls: ['./listar-Conductor.component.css']
})
export class ListarConductorComponent implements OnInit {

  constructor(private condService: ConductorService) { }
  private conductores:Array<conductor>;

  getConductores(): void{
    this.condService.getConductores().subscribe(conductores => {
      this.conductores = conductores;
    });
  }

  ngOnInit() {
    this.getConductores();
  }

}
