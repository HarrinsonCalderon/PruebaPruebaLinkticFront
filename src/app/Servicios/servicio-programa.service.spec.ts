import { TestBed } from '@angular/core/testing';

import { ServicioProgramaService } from './servicio-programa.service';

describe('ServicioProgramaService', () => {
  let service: ServicioProgramaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioProgramaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
