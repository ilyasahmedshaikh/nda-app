import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NdaListingsComponent } from './nda-listings.component';

describe('NdaListingsComponent', () => {
  let component: NdaListingsComponent;
  let fixture: ComponentFixture<NdaListingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NdaListingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NdaListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
