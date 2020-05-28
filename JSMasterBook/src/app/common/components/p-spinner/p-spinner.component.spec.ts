import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PSpinnerComponent } from './p-spinner.component';

describe('PSpinnerComponent', () => {
  let component: PSpinnerComponent;
  let fixture: ComponentFixture<PSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
