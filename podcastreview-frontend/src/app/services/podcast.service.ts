import { Injectable } from "@angular/core"
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Observable } from "rxjs"
import { catchError, map, tap } from "rxjs/operators"

import { Podcast } from "../podcast"

@Injectable({
  providedIn: "root",
})
export class PodcastService {
  // base api urls
  private apiUrl =
    "https://podcast-review-middle-sass-winter-su.azurewebsites.net/"
  private podcastUrl = this.apiUrl + "podcast"
  private searchUrl = this.apiUrl + "search"

  constructor(private http: HttpClient) {}

  /*
  GET podcast by id. Will 404 if id not found
  accesses middleware /podcast/{id} */
  getPodcast(id: string): Observable<Podcast> {
    const url = `${this.podcastUrl}/${id}`
    return this.http.get<Podcast>(url).pipe(
      tap(_ => console.log(`fetched podcast id=${id}`)),
      catchError(this.handleError<Podcast>(`getPodcast id=${id}`))
    )
  }

  /* 
  // getPodcastSearchResults: accesses /search/{query}
  /* GET heroes whose name contains search term */
  searchPodcasts(term: string): Observable<Podcast[]> {
    if (!term.trim()) {
      // if not search term, return empty
      return
    }
    return this.http.get<Podcast[]>(`${this.searchUrl}/${term}`).pipe(
      tap(x =>
        x.length
          ? console.log(`found heroes matching "${term}"`)
          : console.log(`no heroes matching "${term}"`)
      ),
      catchError(this.handleError<Podcast[]>("searchPodcasts", []))
    )
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error) // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`)

      // Let the app keep running by returning an empty result.
      return
    }
  }
}
