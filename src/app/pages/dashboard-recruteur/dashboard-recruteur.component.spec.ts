import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardRecruteurComponent } from './dashboard-recruteur.component';

describe('DashboardRecruteurComponent', () => {
  let component: DashboardRecruteurComponent;
  let fixture: ComponentFixture<DashboardRecruteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardRecruteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardRecruteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
