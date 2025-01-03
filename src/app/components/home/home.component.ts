import { Component, inject } from '@angular/core';
import { Joke } from '../../models/Joke';
import { JokesService } from '../../services/jokes.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  randomJoke: Joke | null = null

  jokeService = inject(JokesService)

  getRandomJoke() {
    this.jokeService.fetchRandomJoke().subscribe((res) => {
      this.randomJoke = res
      console.log(res);
      
    })
  }
}
