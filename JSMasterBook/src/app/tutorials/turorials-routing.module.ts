import { RouterModule, Routes } from '@angular/router';
import { TutorialListComponent } from './tutorial-list/tutorial-list.component';
import { TutorialDetailComponent } from './tutorial-detail/tutorial-detail.component';
import { NgModule } from '@angular/core';


const routes: Routes = [
    { path: 'tuts', component: TutorialListComponent},
    { path: 'details/:id', component: TutorialDetailComponent},
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
