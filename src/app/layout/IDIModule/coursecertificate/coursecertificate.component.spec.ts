import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursecertificateComponent } from './coursecertificate.component';

describe('CoursecertificateComponent', () => {
  let component: CoursecertificateComponent;
  let fixture: ComponentFixture<CoursecertificateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursecertificateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursecertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
