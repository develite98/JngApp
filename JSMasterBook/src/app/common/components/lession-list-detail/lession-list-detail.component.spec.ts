import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessionListDetailComponent } from './lession-list-detail.component';

describe('LessionListDetailComponent', () => {
  let component: LessionListDetailComponent;
  let fixture: ComponentFixture<LessionListDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessionListDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessionListDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
