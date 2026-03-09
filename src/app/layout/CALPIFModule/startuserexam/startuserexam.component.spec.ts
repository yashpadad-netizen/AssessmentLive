import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartuserexamComponent } from './startuserexam.component';

describe('StartuserexamComponent', () => {
  let component: StartuserexamComponent;
  let fixture: ComponentFixture<StartuserexamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartuserexamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartuserexamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
