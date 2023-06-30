import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLoginRecComponent } from './page-login-rec.component';

describe('PageLoginRecComponent', () => {
  let component: PageLoginRecComponent;
  let fixture: ComponentFixture<PageLoginRecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageLoginRecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageLoginRecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
