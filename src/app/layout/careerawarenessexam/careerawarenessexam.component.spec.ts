import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerawarenessexamComponent } from './careerawarenessexam.component';

describe('CareerawarenessexamComponent', () => {
  let component: CareerawarenessexamComponent;
  let fixture: ComponentFixture<CareerawarenessexamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareerawarenessexamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CareerawarenessexamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
