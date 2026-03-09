import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DsfeedbackComponent } from './dsfeedback.component';

describe('DsfeedbackComponent', () => {
  let component: DsfeedbackComponent;
  let fixture: ComponentFixture<DsfeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DsfeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DsfeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
