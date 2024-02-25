import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

const options = {
  params: {
    include_adult: 'false',
    include_video: 'true',
    language: 'en-US',
    page: '1',
    sort_by: 'popularity.desc'
  },
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZTRlYjAzY2MxZTdmMmE5ZGZjMmFmYjFlYTllM2M0MyIsInN1YiI6IjY1YWJlOTQzOThmMWYxMDEyOGRmMzE0MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Rjz-zdvQj1UDeZ3KNW1K9eEHczswHHzpTk-OKStcF0U'
  }
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  http = inject(HttpClient)

  getMovies() {
    return this.http.get<any>('https://api.themoviedb.org/3/discover/movie', options)
  }
}
