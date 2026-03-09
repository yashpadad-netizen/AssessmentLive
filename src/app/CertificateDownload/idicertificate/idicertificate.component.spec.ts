import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdicertificateComponent } from './idicertificate.component';

describe('IdicertificateComponent', () => {
  let component: IdicertificateComponent;
  let fixture: ComponentFixture<IdicertificateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdicertificateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdicertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
