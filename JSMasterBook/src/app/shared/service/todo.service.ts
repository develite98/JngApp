import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { LocalStorageService } from './local-storage.service';
import { Filter } from '../models/filtering.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private static readonly TodoKey = 'wbook-todo';
  private toDos: Todo[];
  private filteredTodo: Todo[];
  private lengthSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private displayTodoJubject: BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>([]);
  private currentFilter: Filter = Filter.All;
  toDos$: Observable<Todo[]> = this.displayTodoJubject.asObservable();
  lengthSubject$: Observable<number> = this.lengthSubject.asObservable();

  constructor(private localstorageService: LocalStorageService) { }

  addTodo(value: string) {
    const date = new Date(Date.now()).getTime();
    const newTodo = new Todo(date, value);
    console.log(newTodo);
    this.toDos.unshift(newTodo);
    console.log(this.toDos);
    this.updateToLocal();
  }

  fetchFromLocal() {
    this.toDos = this.localstorageService.getValue<Todo[]>(TodoService.TodoKey) || [];
    this.filteredTodo = [...this.toDos.map(todo => ({...todo}))];
    this.updateDisplayTodo();
    console.log(this.toDos);
  }

  updateToLocal() {
    this.localstorageService.setObject(TodoService.TodoKey, this.toDos);
    this.filterTodo(this.currentFilter, false);
    this.updateDisplayTodo();
  }

  changeTodoStatus(id: number, isCompleted: boolean) {
    const index = this.toDos.findIndex(t => t.id = id);
    const todo = this.toDos[index];
    todo.isCompleted = isCompleted;
    this.toDos.splice(index, 1, todo);
    this.updateToLocal();
  }


  private updateDisplayTodo() {
    this.displayTodoJubject.next(this.filteredTodo);
    this.lengthSubject.next(this.toDos.length);
  }

  private filterTodo(filter: Filter, isFiltering: boolean = true) {
    this.currentFilter = filter;
    switch (filter) {
      case Filter.Active:
        this.filteredTodo = this.toDos.filter(todo => !todo.isCompleted);
        break;
      case Filter.Completed:
        this.filteredTodo = this.toDos.filter(todo => todo.isCompleted);
        break;
      case Filter.All:
        this.filteredTodo = [...this.toDos.map(todo => ({...todo}))];
        break;
    }
    if (isFiltering) {
      this.updateDisplayTodo();
    }

  }
}
