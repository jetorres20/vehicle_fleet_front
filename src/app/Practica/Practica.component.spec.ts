/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PracticaComponent } from './Practica.component';

describe('PracticaComponent', () => {
  let component: PracticaComponent;
  let fixture: ComponentFixture<PracticaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracticaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
