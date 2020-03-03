import { Component, OnInit } from "@angular/core"

import { Observable, Subject } from "rxjs"

import { debounceTime, distinctUntilChanged, switchMap } from "rxjs/operators"

import { Podcast } from "../../podcast"
import { PodcastService } from "../../services/podcast.service"

@Component({
  selector: "app-list-podcasts",
  templateUrl: "./list-podcasts.component.html",
  styleUrls: ["./list-podcasts.component.css"],
})
export class ListPodcastsComponent implements OnInit {
  podcasts$: Observable<Podcast[]>
  private searchTerms = new Subject<string>()

  constructor(private podcastService: PodcastService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term)
  }

  ngOnInit(): void {
    this.podcasts$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.podcastService.searchPodcasts(term))
    )
  }
}
