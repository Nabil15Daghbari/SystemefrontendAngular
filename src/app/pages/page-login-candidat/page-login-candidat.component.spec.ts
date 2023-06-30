import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLoginCandidatComponent } from './page-login-candidat.component';

describe('PageLoginCandidatComponent', () => {
  let component: PageLoginCandidatComponent;
  let fixture: ComponentFixture<PageLoginCandidatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageLoginCandidatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageLoginCandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
