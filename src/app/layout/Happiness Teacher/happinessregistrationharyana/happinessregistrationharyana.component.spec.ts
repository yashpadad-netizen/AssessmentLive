import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HappinessregistrationharyanaComponent } from './happinessregistrationharyana.component';

describe('HappinessregistrationharyanaComponent', () => {
  let component: HappinessregistrationharyanaComponent;
  let fixture: ComponentFixture<HappinessregistrationharyanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HappinessregistrationharyanaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HappinessregistrationharyanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
