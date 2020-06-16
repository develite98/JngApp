import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LottieModule } from 'ngx-lottie';

import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { NotFoundPageComponent } from './shared/not-found-page/not-found-page.component';
import { TutorialsModule } from './tutorials/tutorials.module';
import { AppRoutingModule } from './app-routing.module';
import { TutorialsServiceService } from './shared/service/tutorials-service.service';
import { LessionListDetailComponent } from './common/components/lession-list-detail/lession-list-detail.component';
import { HomeCardInfoComponent } from './commo/component/home-card-info/home-card-info.component';


export function HttpLoaderFactory(http: HttpClient ) {
  return new TranslateHttpLoader(http);
}

export function playerFactory() {
  return import('lottie-web');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    DetailComponent,
    NotFoundPageComponent,
    LessionListDetailComponent,
    HomeCardInfoComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    TutorialsModule,
    AppRoutingModule,
    LottieModule.forRoot({ player: playerFactory }),
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    })
  ],
  providers: [TutorialsServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
