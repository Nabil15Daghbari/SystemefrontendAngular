import { TestBed } from '@angular/core/testing';

import { UserrecruteurService } from './userrecruteur.service';

describe('UserrecruteurService', () => {
  let service: UserrecruteurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserrecruteurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
