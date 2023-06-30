import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterRecruteurComponent } from './ajouter-recruteur.component';

describe('AjouterRecruteurComponent', () => {
  let component: AjouterRecruteurComponent;
  let fixture: ComponentFixture<AjouterRecruteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterRecruteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterRecruteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
