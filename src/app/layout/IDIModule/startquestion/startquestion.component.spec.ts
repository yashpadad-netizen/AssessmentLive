import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartquestionComponent } from './startquestion.component';

describe('StartquestionComponent', () => {
  let component: StartquestionComponent;
  let fixture: ComponentFixture<StartquestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartquestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartquestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
