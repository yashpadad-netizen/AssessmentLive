import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainexamstartComponent } from './mainexamstart.component';

describe('MainexamstartComponent', () => {
  let component: MainexamstartComponent;
  let fixture: ComponentFixture<MainexamstartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainexamstartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainexamstartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
