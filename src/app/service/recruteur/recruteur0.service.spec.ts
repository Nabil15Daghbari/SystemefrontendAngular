import { TestBed } from '@angular/core/testing';

import { Recruteur0Service } from './recruteur0.service';

describe('Recruteur0Service', () => {
  let service: Recruteur0Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Recruteur0Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
