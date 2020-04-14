/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ListarEstudianteService } from './listarEstudiante.service';

describe('Service: LisyarEstudiante', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListarEstudianteService]
    });
  });

  it('should ...', inject([ListarEstudianteService], (service: ListarEstudianteService) => {
    expect(service).toBeTruthy();
  }));
});
