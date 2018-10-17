import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TongbuJobComponent } from './tongbu-job.component';

describe('TongbuJobComponent', () => {
  let component: TongbuJobComponent;
  let fixture: ComponentFixture<TongbuJobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TongbuJobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TongbuJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
