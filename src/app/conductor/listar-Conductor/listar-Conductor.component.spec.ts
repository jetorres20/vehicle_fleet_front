/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListarConductorComponent } from './listar-Conductor.component';

describe('ListarConductorComponent', () => {
  let component: ListarConductorComponent;
  let fixture: ComponentFixture<ListarConductorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarConductorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarConductorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
