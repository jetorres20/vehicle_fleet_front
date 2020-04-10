/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ListarRegistroService } from './listarRegistro.service';

describe('Service: ListarRegistro', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListarRegistroService]
    });
  });

  it('should ...', inject([ListarRegistroService], (service: ListarRegistroService) => {
    expect(service).toBeTruthy();
  }));
});
