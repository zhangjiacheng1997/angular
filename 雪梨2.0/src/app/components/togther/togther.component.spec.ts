import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TogtherComponent } from './togther.component';

describe('TogtherComponent', () => {
  let component: TogtherComponent;
  let fixture: ComponentFixture<TogtherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TogtherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TogtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
