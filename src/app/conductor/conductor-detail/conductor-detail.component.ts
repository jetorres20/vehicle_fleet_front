import { Component, OnInit, Input } from '@angular/core';
import { ConductorDetail } from '../conductorDetail';

@Component({
  selector: 'app-conductor-detail',
  templateUrl: './conductor-detail.component.html',
  styleUrls: ['./conductor-detail.component.css']
})
export class ConductorDetailComponent implements OnInit {

  @Input() conductorDetail: ConductorDetail;

  constructor() { }

  ngOnInit() {
  }

}
