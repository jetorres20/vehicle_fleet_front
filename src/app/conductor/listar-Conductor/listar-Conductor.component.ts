import { Component, OnInit } from '@angular/core';
import { conductor } from '../conductor';
import { ConductorService } from '../conductor.service';
import { ConductorDetail } from '../conductorDetail';

@Component({
  selector: 'app-listar-Conductor',
  templateUrl: './listar-Conductor.component.html',
  styleUrls: ['./listar-Conductor.component.css']
})
export class ListarConductorComponent implements OnInit {

  selected = false;
  selectedConductor:ConductorDetail;
  conductores:Array<ConductorDetail>;
  
  constructor(private condService: ConductorService) { }
  

  getConductores(): void{
    this.condService.getConductores().subscribe(conductores => {
      this.conductores = conductores;
    });
  }

  onSelected(c:ConductorDetail): void{
    this.selected = true;
    this.selectedConductor = c;
  }

  ngOnInit() {
    this.getConductores();
  }

}
