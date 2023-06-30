import { TestBed } from '@angular/core/testing';

import { CandidatGuardService } from './candidat-guard.service';

describe('CandidatGuardService', () => {
  let service: CandidatGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CandidatGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
