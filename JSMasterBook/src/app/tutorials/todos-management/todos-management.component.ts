import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoService } from 'src/app/shared/service/todo.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-todos-management',
  templateUrl: './todos-management.component.html',
  styleUrls: ['./todos-management.component.scss']
})
export class TodosManagementComponent implements OnInit {

  hasTodo: Observable<boolean>;

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todoService.fetchFromLocal();
    this.hasTodo = this.todoService.lengthSubject$.pipe(map(length => length > 0));
  }

}
