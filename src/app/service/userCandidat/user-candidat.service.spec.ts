import { TestBed } from '@angular/core/testing';

import { UserCandidatService } from './user-candidat.service';

describe('UserCandidatService', () => {
  let service: UserCandidatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserCandidatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
