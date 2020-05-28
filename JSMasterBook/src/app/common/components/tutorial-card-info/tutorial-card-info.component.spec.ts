import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialCardInfoComponent } from './tutorial-card-info.component';

describe('TutorialCardInfoComponent', () => {
  let component: TutorialCardInfoComponent;
  let fixture: ComponentFixture<TutorialCardInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorialCardInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialCardInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
