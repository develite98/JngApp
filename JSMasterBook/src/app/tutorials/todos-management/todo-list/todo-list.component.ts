import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../../shared/service/todo.service';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/shared/models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todoList: Observable<Todo[]>;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.getListOfTodoContent();
  }

  getListOfTodoContent() {
    this.todoList = this.todoService.toDos$;
  }

}
