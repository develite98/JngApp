import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { TutorialListComponent } from './tutorial-list/tutorial-list.component';
import { TutorialDetailComponent } from './tutorial-detail/tutorial-detail.component';
import { TutsRoutingModule } from './turorials-routing.module';
import { TutorialCardInfoComponent } from '../common/components/tutorial-card-info/tutorial-card-info.component';
import { PSpinnerComponent } from '../common/components/p-spinner/p-spinner.component';


@NgModule({
  declarations: [
    TutorialListComponent,
    TutorialDetailComponent,
    TutorialCardInfoComponent,
    PSpinnerComponent],
  imports: [
    TutsRoutingModule,
    CommonModule
  ]
})
export class TutorialsModule { }
