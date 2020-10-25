import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendordDiagramComponent } from './vendord-diagram.component';

describe('VendordDiagramComponent', () => {
  let component: VendordDiagramComponent;
  let fixture: ComponentFixture<VendordDiagramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendordDiagramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendordDiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
