import { NgModule } from "@angular/core"
import { Routes, RouterModule } from "@angular/router"

import { ListPodcastsComponent } from "./components/list-podcasts/list-podcasts.component"
import { PodcastDetailsComponent } from "./components/podcast-details/podcast-details.component"

const routes: Routes = [
  {
    path: "",
    component: ListPodcastsComponent,
  },
  {
    path: "podcast/:id",
    component: PodcastDetailsComponent,
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
