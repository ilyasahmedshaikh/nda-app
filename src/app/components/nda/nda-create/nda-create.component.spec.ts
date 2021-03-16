import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NdaCreateComponent } from './nda-create.component';

describe('NdaCreateComponent', () => {
  let component: NdaCreateComponent;
  let fixture: ComponentFixture<NdaCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NdaCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NdaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
