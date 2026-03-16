import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HappinessregistrationformComponent } from './happinessregistrationform.component';

describe('HappinessregistrationformComponent', () => {
  let component: HappinessregistrationformComponent;
  let fixture: ComponentFixture<HappinessregistrationformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HappinessregistrationformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HappinessregistrationformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
