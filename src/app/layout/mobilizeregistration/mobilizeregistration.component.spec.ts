import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilizeregistrationComponent } from './mobilizeregistration.component';

describe('MobilizeregistrationComponent', () => {
  let component: MobilizeregistrationComponent;
  let fixture: ComponentFixture<MobilizeregistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobilizeregistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilizeregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
