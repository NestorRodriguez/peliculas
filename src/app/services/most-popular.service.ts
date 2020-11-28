import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MostPopularService {

  urlMostPopular = 'https://imdb-api.com/en/API/MostPopularMovies/k_z2ep1l5o'

  constructor(private http : HttpClient) { }

  getMostPopular() { 
    return this.http.get(this.urlMostPopular)
  }


}
