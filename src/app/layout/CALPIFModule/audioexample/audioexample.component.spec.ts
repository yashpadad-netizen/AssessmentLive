import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioexampleComponent } from './audioexample.component';

describe('AudioexampleComponent', () => {
  let component: AudioexampleComponent;
  let fixture: ComponentFixture<AudioexampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AudioexampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AudioexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
