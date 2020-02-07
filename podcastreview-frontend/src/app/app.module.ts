import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PodcastDetailsComponent } from './components/podcast-details/podcast-details.component';
import { ListPodcastsComponent } from './components/list-podcasts/list-podcasts.component';
import { LargeSearchBarComponent } from './large-search-bar/large-search-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PodcastDetailsComponent,
    ListPodcastsComponent,
    LargeSearchBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
