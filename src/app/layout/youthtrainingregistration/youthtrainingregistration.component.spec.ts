import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YouthtrainingregistrationComponent } from './youthtrainingregistration.component';

describe('YouthtrainingregistrationComponent', () => {
  let component: YouthtrainingregistrationComponent;
  let fixture: ComponentFixture<YouthtrainingregistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YouthtrainingregistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YouthtrainingregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
