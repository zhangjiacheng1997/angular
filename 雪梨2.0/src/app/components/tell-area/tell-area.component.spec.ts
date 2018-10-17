import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TellAreaComponent } from './tell-area.component';

describe('TellAreaComponent', () => {
  let component: TellAreaComponent;
  let fixture: ComponentFixture<TellAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TellAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TellAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
