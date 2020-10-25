import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuesShapeComponent } from './values-shape.component';

describe('ValuesShapeComponent', () => {
  let component: ValuesShapeComponent;
  let fixture: ComponentFixture<ValuesShapeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValuesShapeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValuesShapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
