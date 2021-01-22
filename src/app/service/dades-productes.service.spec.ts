import { TestBed } from '@angular/core/testing';

import { DadesProductesService } from './dades-productes.service';

describe('DadesProductesService', () => {
  let service: DadesProductesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DadesProductesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
