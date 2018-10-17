import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TogtherLiComponent } from './togther-li.component';

describe('TogtherLiComponent', () => {
  let component: TogtherLiComponent;
  let fixture: ComponentFixture<TogtherLiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TogtherLiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TogtherLiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
