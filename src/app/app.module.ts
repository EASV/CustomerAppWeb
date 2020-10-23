import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CityListComponent } from './cities/city-list/city-list.component';
import {HttpClientModule} from '@angular/common/http';
import { CityDetailComponent } from './cities/city-detail/city-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CityListComponent,
    CityDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
