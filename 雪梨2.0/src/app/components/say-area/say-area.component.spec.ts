import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SayAreaComponent } from './say-area.component';

describe('SayAreaComponent', () => {
  let component: SayAreaComponent;
  let fixture: ComponentFixture<SayAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SayAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SayAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
