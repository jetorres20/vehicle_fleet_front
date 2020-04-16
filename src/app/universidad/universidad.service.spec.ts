/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UniversidadService } from './universidad.service';

describe('Service: Universidad', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UniversidadService]
    });
  });

  it('should ...', inject([UniversidadService], (service: UniversidadService) => {
    expect(service).toBeTruthy();
  }));
});
