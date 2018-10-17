import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobAreaComponent } from './job-area.component';

describe('JobAreaComponent', () => {
  let component: JobAreaComponent;
  let fixture: ComponentFixture<JobAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
