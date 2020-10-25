import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassesVariablesComponent } from './classes-variables.component';

describe('ClassesVariablesComponent', () => {
  let component: ClassesVariablesComponent;
  let fixture: ComponentFixture<ClassesVariablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassesVariablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassesVariablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
