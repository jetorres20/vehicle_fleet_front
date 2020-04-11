/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ListarPracticaService } from './listarPractica.service';

describe('Service: ListarPractica', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListarPracticaService]
    });
  });

  it('should ...', inject([ListarPracticaService], (service: ListarPracticaService) => {
    expect(service).toBeTruthy();
  }));
});
