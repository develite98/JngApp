import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessionListComponent } from './lession-list.component';

describe('LessionListComponent', () => {
  let component: LessionListComponent;
  let fixture: ComponentFixture<LessionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
