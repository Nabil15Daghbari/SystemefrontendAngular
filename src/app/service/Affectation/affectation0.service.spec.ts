import { TestBed } from '@angular/core/testing';

import { Affectation0Service } from './affectation0.service';

describe('Affectation0Service', () => {
  let service: Affectation0Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Affectation0Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
