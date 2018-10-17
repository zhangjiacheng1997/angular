import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tell1AreaComponent } from './tell1-area.component';

describe('Tell1AreaComponent', () => {
  let component: Tell1AreaComponent;
  let fixture: ComponentFixture<Tell1AreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tell1AreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tell1AreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
