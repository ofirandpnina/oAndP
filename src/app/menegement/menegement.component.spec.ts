import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenegementComponent } from './menegement.component';

describe('MenegementComponent', () => {
  let component: MenegementComponent;
  let fixture: ComponentFixture<MenegementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenegementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenegementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
