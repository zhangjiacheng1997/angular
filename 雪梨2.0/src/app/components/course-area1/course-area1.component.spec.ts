import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseArea1Component } from './course-area1.component';

describe('CourseArea1Component', () => {
  let component: CourseArea1Component;
  let fixture: ComponentFixture<CourseArea1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseArea1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseArea1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
