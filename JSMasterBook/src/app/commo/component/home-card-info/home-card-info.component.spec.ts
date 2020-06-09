import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCardInfoComponent } from './home-card-info.component';

describe('HomeCardInfoComponent', () => {
  let component: HomeCardInfoComponent;
  let fixture: ComponentFixture<HomeCardInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeCardInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCardInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
