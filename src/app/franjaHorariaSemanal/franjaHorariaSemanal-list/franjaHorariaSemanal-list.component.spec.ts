/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FranjaHorariaSemanalListComponent } from './franjaHorariaSemanal-list.component';

describe('FranjaHorariaSemanalListComponent', () => {
  let component: FranjaHorariaSemanalListComponent;
  let fixture: ComponentFixture<FranjaHorariaSemanalListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FranjaHorariaSemanalListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FranjaHorariaSemanalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
