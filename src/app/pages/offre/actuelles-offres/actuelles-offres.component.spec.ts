import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActuellesOffresComponent } from './actuelles-offres.component';

describe('ActuellesOffresComponent', () => {
  let component: ActuellesOffresComponent;
  let fixture: ComponentFixture<ActuellesOffresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActuellesOffresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActuellesOffresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
