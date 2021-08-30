import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopheadingComponent } from './components/topheading/topheading.component';
import { NewapiserviceService } from "../app/services/newapiservice.service";
import { TechnewsComponent } from './components/technews/technews.component';
import { BiznewsComponent } from './components/biznews/biznews.component';
import { SportsnewsComponent } from './components/sportsnews/sportsnews.component';

@NgModule({
  declarations: [
    AppComponent,
    TopheadingComponent,
    TechnewsComponent,
    BiznewsComponent,
    SportsnewsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingBarHttpClientModule
  ],
  providers: [NewapiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
