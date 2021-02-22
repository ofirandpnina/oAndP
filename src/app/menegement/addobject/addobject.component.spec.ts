import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddobjectComponent } from './addobject.component';

describe('AddobjectComponent', () => {
  let component: AddobjectComponent;
  let fixture: ComponentFixture<AddobjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddobjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddobjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
