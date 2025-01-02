import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Joke, SearchedJoke } from '../models/Joke';

@Injectable({
  providedIn: 'root'
})
export class JokesService {

  baseUrl = "https://api.chucknorris.io/jokes"
  constructor(private httpClient: HttpClient) { }

  fetchRandomJoke() {
    this.httpClient.get<Joke>(`${this.baseUrl}/random`)
  }

  fetchCategories() {
    this.httpClient.get<string[]>(`${this.baseUrl}/categories`)
  }

  fetchRandomJokeFromCategory(category: string) {
    this.httpClient.get<Joke>(`${this.baseUrl}/${category}`)
  }

  fetchSearchedJoke(searchInput: string) {
    this.httpClient.get<SearchedJoke>(`${this.baseUrl}/search?query=${searchInput}`)
  }
}
