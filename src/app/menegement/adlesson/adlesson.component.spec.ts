import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdlessonComponent } from './adlesson.component';

describe('AdlessonComponent', () => {
  let component: AdlessonComponent;
  let fixture: ComponentFixture<AdlessonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdlessonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdlessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
