import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditsBarComponent } from './credits-bar.component';

describe('CreditsBarComponent', () => {
  let component: CreditsBarComponent;
  let fixture: ComponentFixture<CreditsBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditsBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditsBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
