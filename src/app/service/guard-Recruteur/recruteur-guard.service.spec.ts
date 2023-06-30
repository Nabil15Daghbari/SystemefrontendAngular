import { TestBed } from '@angular/core/testing';

import { RecruteurGuardService } from './recruteur-guard.service';

describe('RecruteurGuardService', () => {
  let service: RecruteurGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecruteurGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
