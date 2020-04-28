import { Component, OnInit } from '@angular/core';
import { Universidad } from '../universidad';
import { UniversidadService } from '../universidad.service';
import { UniversidadDetail } from '../universidadDetail';

@Component({
  selector: 'app-universidad-list',
  templateUrl: './universidad-list.component.html',
  styleUrls: ['./universidad-list.component.css']
})

export class UniversidadListComponent implements OnInit {

  selected=false;
  selectedUniversidad:UniversidadDetail;
  public universidades:Array<Universidad>;

  constructor(private universidadService:UniversidadService) { }
  
  ngOnInit() {
    this.getUniversidades();
  }

  onSelected(u:UniversidadDetail):void{
    this.selected=true;
    this.selectedUniversidad=u;
  }

  getUniversidades(){
    this.universidadService.getUniversidades().subscribe(universidades=>this.universidades=universidades);
  }
}
