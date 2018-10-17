import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TellLiComponent } from './tell-li.component';

describe('TellLiComponent', () => {
  let component: TellLiComponent;
  let fixture: ComponentFixture<TellLiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TellLiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TellLiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
