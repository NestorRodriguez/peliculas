import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchMovieService {
  
  urlMostPopular = 'https://imdb-api.com/en/API/SearchMovie/k_z2ep1l5o/'

  constructor(private http : HttpClient) { }

  getSearchMovie(name) { 
    return this.http.get(this.urlMostPopular+name)
  }
}