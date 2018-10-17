import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseLiComponent } from './course-li.component';

describe('CourseLiComponent', () => {
  let component: CourseLiComponent;
  let fixture: ComponentFixture<CourseLiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseLiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseLiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
