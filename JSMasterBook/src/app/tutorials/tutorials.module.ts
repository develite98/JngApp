import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { TutorialListComponent } from './tutorial-list/tutorial-list.component';
import { TutorialDetailComponent } from './tutorial-detail/tutorial-detail.component';
import { TutsRoutingModule } from './turorials-routing.module';

@NgModule({
  declarations: [TutorialListComponent, TutorialDetailComponent],
  imports: [
    TutsRoutingModule,
    CommonModule
  ]
})
export class TutorialsModule { }
