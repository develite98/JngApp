import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

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


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    DetailComponent,
    NotFoundPageComponent,
  ],
  imports: [
    HttpClientModule,
    MatSliderModule,
    MatSidenavModule,
    BrowserModule,
    BrowserAnimationsModule,
    TutorialsModule,
    AppRoutingModule
  ],
  providers: [TutorialsServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
