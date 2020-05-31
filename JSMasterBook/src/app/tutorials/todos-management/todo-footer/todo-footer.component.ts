import { Component, OnInit, ɵALLOW_MULTIPLE_PLATFORMS } from '@angular/core';
import { FilterButton, Filter } from '../../../shared/models/filtering.model';

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

  constructor() { }

  ngOnInit(): void {
  }

}
