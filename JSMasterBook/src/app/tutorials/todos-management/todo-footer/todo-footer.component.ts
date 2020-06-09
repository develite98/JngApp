import { Component, OnInit, ɵALLOW_MULTIPLE_PLATFORMS } from '@angular/core';
import { FilterButton, Filter } from '../../../shared/models/filtering.model';
import { TodoService } from 'src/app/shared/service/todo.service';
import { TranslateService } from '@ngx-translate/core';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss']
})
export class TodoFooterComponent implements OnInit {
  length = 2;
  filterButton: FilterButton[] = [
    {type: Filter.All, label: 'All', isActive: true},
    {type: Filter.Active, label: 'Active', isActive: false},
    {type: Filter.Completed, label: 'Completed', isActive: false},
  ];

  lenghtOfTodoListItem = 0;

  constructor(private todoService: TodoService, private translateSv: TranslateService) { }

  ngOnInit(): void {
    this.getLenghtOfListTodoContent();
  }

  getLenghtOfListTodoContent() {
    this.todoService.lengthSubject$.subscribe(val => this.lenghtOfTodoListItem = val);
  }

  onChangeFilter(val: Filter) {
    this.todoService.filterTodo(val, false);
    this.filterButton.map(x => { x.type === val ? x.isActive = true : x.isActive = false; });
  }
}
