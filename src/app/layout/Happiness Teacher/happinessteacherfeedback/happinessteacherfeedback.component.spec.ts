import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HappinessteacherfeedbackComponent } from './happinessteacherfeedback.component';

describe('HappinessteacherfeedbackComponent', () => {
  let component: HappinessteacherfeedbackComponent;
  let fixture: ComponentFixture<HappinessteacherfeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HappinessteacherfeedbackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HappinessteacherfeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
