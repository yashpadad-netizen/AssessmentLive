import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificatesearchComponent } from './certificatesearch.component';

describe('CertificatesearchComponent', () => {
  let component: CertificatesearchComponent;
  let fixture: ComponentFixture<CertificatesearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificatesearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificatesearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
