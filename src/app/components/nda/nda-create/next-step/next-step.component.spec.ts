import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextStepComponent } from './next-step.component';

describe('NextStepComponent', () => {
  let component: NextStepComponent;
  let fixture: ComponentFixture<NextStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NextStepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NextStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
