import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherworkshopfeedbackComponent } from './teacherworkshopfeedback.component';

describe('TeacherworkshopfeedbackComponent', () => {
  let component: TeacherworkshopfeedbackComponent;
  let fixture: ComponentFixture<TeacherworkshopfeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherworkshopfeedbackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherworkshopfeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
