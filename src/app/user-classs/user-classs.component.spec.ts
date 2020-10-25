import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserClasssComponent } from './user-classs.component';

describe('UserClasssComponent', () => {
  let component: UserClasssComponent;
  let fixture: ComponentFixture<UserClasssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserClasssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserClasssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
