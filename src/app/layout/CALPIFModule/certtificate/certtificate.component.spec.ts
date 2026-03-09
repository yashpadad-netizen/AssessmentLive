import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CerttificateComponent } from './certtificate.component';

describe('CerttificateComponent', () => {
  let component: CerttificateComponent;
  let fixture: ComponentFixture<CerttificateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CerttificateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CerttificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
