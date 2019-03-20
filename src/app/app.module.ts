import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CityListComponent } from './city-list/city-list.component';
import { CityDetailComponent } from './city-detail/city-detail.component'
import { NavComponent } from './nav/nav.component';
import { CityThumbnailComponent } from './city-thumbnail/city-thumbnail.component';

@NgModule({
  declarations: [
    AppComponent,
    CityListComponent,
    NavComponent,
    CityDetailComponent,
    CityThumbnailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
