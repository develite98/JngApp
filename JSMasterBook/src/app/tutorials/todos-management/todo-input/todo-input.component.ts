import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../../shared/service/todo.service';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss']
})
export class TodoInputComponent implements OnInit {

  todoContent = '';

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.todoContent.trim() === '') {
      return false;
    } else {
      this.todoService.addTodo(this.todoContent);
      this.todoContent = '';
    }
  }

}
