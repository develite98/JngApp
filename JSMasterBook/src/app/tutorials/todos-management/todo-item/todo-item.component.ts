import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from 'src/app/shared/service/todo.service';
import { Todo } from 'src/app/shared/models/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  isHoverred = false;

  @Input() todoItem: Todo;
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }


}
