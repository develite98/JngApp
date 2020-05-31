import { RouterModule, Routes } from '@angular/router';
import { TutorialListComponent } from './tutorial-list/tutorial-list.component';
import { TutorialDetailComponent } from './tutorial-detail/tutorial-detail.component';
import { TodosManagementComponent } from './todos-management/todos-management.component';
import { NgModule } from '@angular/core';



const routes: Routes = [
    { path: 'tuts', component: TutorialListComponent},
    { path: 'home/tuts', component: TutorialListComponent},
    { path: 'tuts/:id', component: TutorialDetailComponent},
    { path: 'todos', component: TodosManagementComponent},
  ];
@NgModule({
      imports: [
        RouterModule.forChild(routes),
      ],
      exports: [
          RouterModule
      ]
})
export class TutsRoutingModule {}
