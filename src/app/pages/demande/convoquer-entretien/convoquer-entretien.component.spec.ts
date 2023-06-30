import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvoquerEntretienComponent } from './convoquer-entretien.component';

describe('ConvoquerEntretienComponent', () => {
  let component: ConvoquerEntretienComponent;
  let fixture: ComponentFixture<ConvoquerEntretienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvoquerEntretienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvoquerEntretienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
