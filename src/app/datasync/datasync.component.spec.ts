import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatasyncComponent } from './datasync.component';

describe('DatasyncComponent', () => {
  let component: DatasyncComponent;
  let fixture: ComponentFixture<DatasyncComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatasyncComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatasyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
