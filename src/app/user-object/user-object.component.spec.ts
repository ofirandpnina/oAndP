import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserObjectComponent } from './user-object.component';

describe('UserObjectComponent', () => {
  let component: UserObjectComponent;
  let fixture: ComponentFixture<UserObjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserObjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
