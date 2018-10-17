import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SayLiComponent } from './say-li.component';

describe('SayLiComponent', () => {
  let component: SayLiComponent;
  let fixture: ComponentFixture<SayLiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SayLiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SayLiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
