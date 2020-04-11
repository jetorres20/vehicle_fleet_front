/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ListarProfesorService } from './listarProfesor.service';

describe('Service: ListarProfesor', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListarProfesorService]
    });
  });

  it('should ...', inject([ListarProfesorService], (service: ListarProfesorService) => {
    expect(service).toBeTruthy();
  }));
});
