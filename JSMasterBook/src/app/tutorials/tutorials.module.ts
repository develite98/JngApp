import { NgModule, } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { TutorialListComponent } from './tutorial-list/tutorial-list.component';
import { TutorialDetailComponent } from './tutorial-detail/tutorial-detail.component';
import { TutsRoutingModule } from './turorials-routing.module';
import { TutorialCardInfoComponent } from '../common/components/tutorial-card-info/tutorial-card-info.component';
import { PSpinnerComponent } from '../common/components/p-spinner/p-spinner.component';
import { LessionListComponent } from '../common/components/lession-list/lession-list.component';

export function HttpLoaderFactory(http: HttpClient ) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    TutorialListComponent,
    TutorialDetailComponent,
    TutorialCardInfoComponent,
    PSpinnerComponent,
    LessionListComponent],
  imports: [
    TutsRoutingModule,
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
