import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpDetailsComponent } from './imp-details.component';

describe('ImpDetailsComponent', () => {
  let component: ImpDetailsComponent;
  let fixture: ComponentFixture<ImpDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImpDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
