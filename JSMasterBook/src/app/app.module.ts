import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatSidenavModule} from '@angular/material/sidenav';

import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { NotFoundPageComponent } from './shared/not-found-page/not-found-page.component';
import { TutorialsModule } from './tutorials/tutorials.module';
import { AppRoutingModule } from './app-routing.module';
import { TutorialsServiceService } from './shared/service/tutorials-service.service';
import { config } from 'rxjs';
import { LessionListDetailComponent } from './common/components/lession-list-detail/lession-list-detail.component';


export function HttpLoaderFactory(http: HttpClient ) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    DetailComponent,
    NotFoundPageComponent,
    LessionListDetailComponent
  ],
  imports: [
    HttpClientModule,
    MatSliderModule,
    MatSidenavModule,
    BrowserModule,
    BrowserAnimationsModule,
    TutorialsModule,
    AppRoutingModule,
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
