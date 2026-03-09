import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetencywisequestionComponent } from './competencywisequestion.component';

describe('CompetencywisequestionComponent', () => {
  let component: CompetencywisequestionComponent;
  let fixture: ComponentFixture<CompetencywisequestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetencywisequestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetencywisequestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
