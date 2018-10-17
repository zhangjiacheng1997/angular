import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Job1Component } from './job1.component';

describe('Job1Component', () => {
  let component: Job1Component;
  let fixture: ComponentFixture<Job1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Job1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Job1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
