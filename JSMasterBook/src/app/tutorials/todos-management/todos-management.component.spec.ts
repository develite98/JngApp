import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosManagementComponent } from './todos-management.component';

describe('TodosManagementComponent', () => {
  let component: TodosManagementComponent;
  let fixture: ComponentFixture<TodosManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodosManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
