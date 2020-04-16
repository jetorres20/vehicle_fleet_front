import { Component, OnInit } from '@angular/core';
import { FranjaHorariaSemanal } from '../franjaHorariaSemanal';
import { FranjaHorariaSemanalService } from '../franjaHorariaSemanal.service';
@Component({
  selector: 'app-franjaHorariaSemanal-list',
  templateUrl: './franjaHorariaSemanal-list.component.html',
  styleUrls: ['./franjaHorariaSemanal-list.component.css']
})
export class FranjaHorariaSemanalListComponent implements OnInit {

  constructor(private franjaService:FranjaHorariaSemanalService) { }

  private franjas:Array<FranjaHorariaSemanal>;

  ngOnInit() {
  
  }

  getFranjas(){
    this.franjaService.getFranjas().subscribe(franjas=>this.franjas=franjas);
  }
}
