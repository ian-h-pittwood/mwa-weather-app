import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CityListComponent } from './city-list/city-list.component';
import { CityDetailComponent } from './city-detail/city-detail.component'
import { NavComponent } from './nav/nav.component';
import { CityThumbnailComponent } from './city-thumbnail/city-thumbnail.component';
import { UsComponent } from './us/us.component';

@NgModule({
  declarations: [
    AppComponent,
    CityListComponent,
    NavComponent,
    CityDetailComponent,
    CityThumbnailComponent,
    UsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
