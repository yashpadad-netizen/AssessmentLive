import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreplacementfeedbackComponent } from './preplacementfeedback.component';

describe('PreplacementfeedbackComponent', () => {
  let component: PreplacementfeedbackComponent;
  let fixture: ComponentFixture<PreplacementfeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreplacementfeedbackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreplacementfeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
