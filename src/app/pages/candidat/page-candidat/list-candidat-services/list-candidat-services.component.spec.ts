import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCandidatServicesComponent } from './list-candidat-services.component';

describe('ListCandidatServicesComponent', () => {
  let component: ListCandidatServicesComponent;
  let fixture: ComponentFixture<ListCandidatServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCandidatServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCandidatServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
