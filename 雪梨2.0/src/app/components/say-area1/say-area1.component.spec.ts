import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SayArea1Component } from './say-area1.component';

describe('SayArea1Component', () => {
  let component: SayArea1Component;
  let fixture: ComponentFixture<SayArea1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SayArea1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SayArea1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
