import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachertrainingfeedbackComponent } from './teachertrainingfeedback.component';

describe('TeachertrainingfeedbackComponent', () => {
  let component: TeachertrainingfeedbackComponent;
  let fixture: ComponentFixture<TeachertrainingfeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeachertrainingfeedbackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachertrainingfeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
