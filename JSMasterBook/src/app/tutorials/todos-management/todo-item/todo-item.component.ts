import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from 'src/app/shared/service/todo.service';
import { Todo } from 'src/app/shared/models/todo.model';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  isHoverred = false;
  items: MenuItem[];
  selectedItemId: number;
  @Input() todoItem: Todo;
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.items = [
      {label: 'Update', icon: 'pi pi-refresh'},
      {label: 'Delete', icon: 'pi pi-times', command: () => {this.onDeleteTodo(this.selectedItemId); }},
      {label: 'Setup', icon: 'pi pi-cog'}
  ];
  }
  onDeleteTodo(id: number): void {
    this.todoService.removeTodo(id);
  }

  onChangeStatusTodo(id: number): void {
    this.todoService.changeStatusTodo(id);
  }

  onDropdownClick(id: number): void {
    this.selectedItemId = id;
  }
}
