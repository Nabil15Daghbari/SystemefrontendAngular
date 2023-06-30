import { TestBed } from '@angular/core/testing';

import { Demande0Service } from './demande0.service';

describe('Demande0Service', () => {
  let service: Demande0Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Demande0Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
