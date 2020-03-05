import { Component, OnInit, Input } from "@angular/core"
import { ActivatedRoute } from "@angular/router"
import { Location } from "@angular/common"

import { Podcast } from "../../podcast"
import { PodcastService } from "../../services/podcast.service"

@Component({
  selector: "app-podcast-details",
  templateUrl: "./podcast-details.component.html",
  styleUrls: ["./podcast-details.component.css"],
})
export class PodcastDetailsComponent implements OnInit {
  @Input() podcast: Podcast

  constructor(
    private route: ActivatedRoute,
    private podcastService: PodcastService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getPodcast()
  }

  getPodcast(): void {
    const id = this.route.snapshot.paramMap.get("id")
    this.podcastService
      .getPodcast(id)
      .subscribe(podcast => (this.podcast = podcast))
  }

  goBack(): void {
    this.location.back()
  }
}
