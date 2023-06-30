import { TestBed } from '@angular/core/testing';

import { Offre0Service } from './offre0.service';

describe('Offre0Service', () => {
  let service: Offre0Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Offre0Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
