import { AfterContentChecked, AfterViewChecked, AfterViewInit, Component, DoCheck, inject, OnChanges, OnInit } from '@angular/core';
import { Joke, SearchedJoke } from '../../models/Joke';
import { JokesService } from '../../services/jokes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements DoCheck{
  randomJoke: Joke | null = null

  jokeService = inject(JokesService)
  router = inject(Router)

  searchedInput: string = ''
  jokes: SearchedJoke | null = null

  getRandomJoke() {
    this.jokeService.fetchRandomJoke().subscribe((res) => {
      this.randomJoke = res 
    })
  }

  ngDoCheck(): void {
    const navigation = this.router.getCurrentNavigation()
    const state = navigation?.extras.state;

    if(state) {
      this.jokes = state['jokes']
      this.searchedInput = state['searchedInput']
    }
  }

}
