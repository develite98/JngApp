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
    const id = new Date(Date.now()).getTime();
    const startDate = new Date();
    const newTodo = new Todo(id, value, startDate);
    console.log(newTodo);
    this.toDos.unshift(newTodo);
    console.log(this.toDos);
    this.updateToLocal();
  }

  removeTodo(value: number) {
    const arrTemp = this.toDos.filter(x => x.id !== value);
    this.toDos = arrTemp;
    this.updateToLocal();
  }

  changeStatusTodo(id: number) {
    const a = this.toDos.findIndex(x => x.id === id);
    this.toDos[a].isCompleted = !this.toDos[a].isCompleted;
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


  private updateDisplayTodo() {
    this.displayTodoJubject.next(this.filteredTodo);
    this.lengthSubject.next(this.toDos.length);
  }

  filterTodo(filter: Filter, isFiltering: boolean = true) {
    switch (filter) {
      case Filter.Active:
        this.filteredTodo = this.toDos.filter(todo => !todo.isCompleted);
        console.log(this.filterTodo);
        break;
      case Filter.Completed:
        this.filteredTodo = this.toDos.filter(todo => todo.isCompleted);
        console.log(this.filterTodo);
        break;
      case Filter.All:
        this.filteredTodo = [...this.toDos.map(todo => ({...todo}))];
        console.log(this.filterTodo);
        break;
    }
    this.updateDisplayTodo();
  }
}
