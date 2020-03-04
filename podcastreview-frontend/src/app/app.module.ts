import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PodcastDetailsComponent } from './components/podcast-details/podcast-details.component';
import { ListPodcastsComponent } from './components/list-podcasts/list-podcasts.component';
import { LargeSearchBarComponent } from './components/large-search-bar/large-search-bar.component';
import { LargeLogoComponent } from './components/large-logo/large-logo.component';
import { LargeLoginComponent } from './components/large-login/large-login.component';
import { HomePageComponent } from './components/home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PodcastDetailsComponent,
    ListPodcastsComponent,
    LargeSearchBarComponent,
    LargeLogoComponent,
    LargeLoginComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
