/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ListarEncuestaService } from './listarEncuesta.service';

describe('Service: ListarEncuesta', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListarEncuestaService]
    });
  });

  it('should ...', inject([ListarEncuestaService], (service: ListarEncuestaService) => {
    expect(service).toBeTruthy();
  }));
});
