import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PanelsViewComponent } from './components/panels-view/panels-view.component';
import { VideoFeedComponent } from './components/video-feed/video-feed.component';

@NgModule({
  declarations: [
    AppComponent,
    PanelsViewComponent,
    VideoFeedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
