import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerOffresComponent } from './lister-offres.component';

describe('ListerOffresComponent', () => {
  let component: ListerOffresComponent;
  let fixture: ComponentFixture<ListerOffresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListerOffresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListerOffresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
