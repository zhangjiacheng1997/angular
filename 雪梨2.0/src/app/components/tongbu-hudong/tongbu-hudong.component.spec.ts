import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TongbuHudongComponent } from './tongbu-hudong.component';

describe('TongbuHudongComponent', () => {
  let component: TongbuHudongComponent;
  let fixture: ComponentFixture<TongbuHudongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TongbuHudongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TongbuHudongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
