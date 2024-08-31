import { TestBed } from '@angular/core/testing';

import { ServicioEstudianteService } from './servicio-estudiante.service';

describe('ServicioEstudianteService', () => {
  let service: ServicioEstudianteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioEstudianteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
