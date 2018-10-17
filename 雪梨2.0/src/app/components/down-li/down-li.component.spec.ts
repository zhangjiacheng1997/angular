import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownLiComponent } from './down-li.component';

describe('DownLiComponent', () => {
  let component: DownLiComponent;
  let fixture: ComponentFixture<DownLiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownLiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownLiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
