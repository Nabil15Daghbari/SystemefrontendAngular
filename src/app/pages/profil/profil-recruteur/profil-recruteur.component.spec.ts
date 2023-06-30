import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilRecruteurComponent } from './profil-recruteur.component';

describe('ProfilRecruteurComponent', () => {
  let component: ProfilRecruteurComponent;
  let fixture: ComponentFixture<ProfilRecruteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilRecruteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilRecruteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
