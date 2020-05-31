import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessionListItemComponent } from './lession-list-item.component';

describe('LessionListItemComponent', () => {
  let component: LessionListItemComponent;
  let fixture: ComponentFixture<LessionListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessionListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessionListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
