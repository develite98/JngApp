import { NgModule, } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { TutorialListComponent } from './tutorial-list/tutorial-list.component';
import { TutorialDetailComponent } from './tutorial-detail/tutorial-detail.component';
import { TutsRoutingModule } from './turorials-routing.module';
import { TutorialCardInfoComponent } from '../common/components/tutorial-card-info/tutorial-card-info.component';
import { PSpinnerComponent } from '../common/components/p-spinner/p-spinner.component';
import { LessionListComponent } from '../common/components/lession-list/lession-list.component';
import { TodosManagementComponent } from './todos-management/todos-management.component';
import { TodoListComponent } from './todos-management/todo-list/todo-list.component';
import { TodoItemComponent } from './todos-management/todo-item/todo-item.component';
import { TodoInputComponent } from './todos-management/todo-input/todo-input.component';
import { TodoHeaderComponent } from './todos-management/todo-header/todo-header.component';
import { TodoFooterComponent } from './todos-management/todo-footer/todo-footer.component';
import { LessionListItemComponent } from '../common/components/lession-list-item/lession-list-item.component';
import { RelativeTimespanPipe } from '../shared/pipe/relatetiveTimeSpan';


export function HttpLoaderFactory(http: HttpClient ) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    TutorialListComponent,
    TutorialDetailComponent,
    TutorialCardInfoComponent,
    PSpinnerComponent,
    LessionListComponent,
    TodosManagementComponent,
    TodoListComponent,
    TodoItemComponent,
    TodoInputComponent,
    TodoHeaderComponent,
    TodoFooterComponent,
    LessionListItemComponent,
    RelativeTimespanPipe],
  imports: [
    TutsRoutingModule,
    FormsModule,
    CommonModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    })
  ]
})
export class TutorialsModule { }
