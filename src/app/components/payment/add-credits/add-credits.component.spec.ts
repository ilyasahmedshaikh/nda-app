import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCreditsComponent } from './add-credits.component';

describe('AddCreditsComponent', () => {
  let component: AddCreditsComponent;
  let fixture: ComponentFixture<AddCreditsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCreditsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCreditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
