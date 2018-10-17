import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TongbuTextComponent } from './tongbu-text.component';

describe('TongbuTextComponent', () => {
  let component: TongbuTextComponent;
  let fixture: ComponentFixture<TongbuTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TongbuTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TongbuTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
