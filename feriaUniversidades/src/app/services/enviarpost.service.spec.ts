import { TestBed } from '@angular/core/testing';

import { EnviarpostService } from './enviarpost.service';

describe('EnviarpostService', () => {
  let service: EnviarpostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnviarpostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
