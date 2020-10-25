import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparisonDiagramComponent } from './comparison-diagram.component';

describe('ComparisonDiagramComponent', () => {
  let component: ComparisonDiagramComponent;
  let fixture: ComponentFixture<ComparisonDiagramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComparisonDiagramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparisonDiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
