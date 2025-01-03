import { HttpClient , provideHttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Joke, SearchedJoke } from '../models/Joke';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JokesService {

  baseUrl = "https://api.chucknorris.io/jokes"
  constructor(private httpClient: HttpClient) { }

  fetchRandomJoke(): Observable<Joke> {
    return this.httpClient.get<Joke>(`${this.baseUrl}/random`);
  }

  fetchCategories(): Observable<string[]> {
    return this.httpClient.get<string[]>(`${this.baseUrl}/categories`)
  }

  fetchRandomJokeFromCategory(category: string): Observable<Joke> {
    return this.httpClient.get<Joke>(`${this.baseUrl}/random?category=${category}`)
  }

  fetchSearchedJoke(searchInput: string): Observable<SearchedJoke> {
    return this.httpClient.get<SearchedJoke>(`${this.baseUrl}/search?query=${searchInput}`)
  }
}
