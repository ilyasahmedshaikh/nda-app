import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NdaDetailsComponent } from './nda-details.component';

describe('NdaDetailsComponent', () => {
  let component: NdaDetailsComponent;
  let fixture: ComponentFixture<NdaDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NdaDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NdaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
