import { Injectable } from "@angular/core"
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Observable } from "rxjs"
import { catchError, map, tap } from "rxjs/operators"

import { Podcast } from "../podcast"