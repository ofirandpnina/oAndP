import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserClassesVariablasComponent } from './user-classes-variablas.component';

describe('UserClassesVariablasComponent', () => {
  let component: UserClassesVariablasComponent;
  let fixture: ComponentFixture<UserClassesVariablasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserClassesVariablasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserClassesVariablasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
