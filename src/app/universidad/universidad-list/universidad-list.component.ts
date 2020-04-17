import { Component, OnInit } from '@angular/core';
import { Universidad } from '../universidad';
import { UniversidadService } from '../universidad.service';

@Component({
  selector: 'app-universidad-list',
  templateUrl: './universidad-list.component.html',
  styleUrls: ['./universidad-list.component.css']
})

export class UniversidadListComponent implements OnInit {

  constructor(private universidadService:UniversidadService) { }
  public universidades:Array<Universidad>;
  ngOnInit() {
    this.getUniversidades();
  }

  getUniversidades(){
    this.universidadService.getUniversidades().subscribe(universidades=>this.universidades=universidades);
  }
}
