import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetwisequestionlistComponent } from './setwisequestionlist.component';

describe('SetwisequestionlistComponent', () => {
  let component: SetwisequestionlistComponent;
  let fixture: ComponentFixture<SetwisequestionlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetwisequestionlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetwisequestionlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
