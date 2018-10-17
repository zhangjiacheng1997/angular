import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TongbuPeopleComponent } from './tongbu-people.component';

describe('TongbuPeopleComponent', () => {
  let component: TongbuPeopleComponent;
  let fixture: ComponentFixture<TongbuPeopleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TongbuPeopleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TongbuPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
