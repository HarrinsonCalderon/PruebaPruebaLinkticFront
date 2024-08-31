import { TestBed } from '@angular/core/testing';

import { ServicioMateriaService } from './servicio-materia.service';

describe('ServicioMateriaService', () => {
  let service: ServicioMateriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioMateriaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
