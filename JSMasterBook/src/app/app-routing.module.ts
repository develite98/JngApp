import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { NotFoundPageComponent } from './shared/not-found-page/not-found-page.component';
import { TutorialsModule } from './tutorials/tutorials.module';

const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'details', component: DetailComponent},
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: '**', component: NotFoundPageComponent }
  ];
@NgModule({
      imports: [
        RouterModule.forRoot(routes),
      ],
      exports: [
          RouterModule
      ]
})
export class AppRoutingModule {}
