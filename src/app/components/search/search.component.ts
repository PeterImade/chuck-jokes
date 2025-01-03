import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JokesService } from '../../services/jokes.service';
import { Joke, SearchedJoke } from '../../models/Joke';

@Component({
  selector: 'app-search',
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  jokeService = inject(JokesService)
  jokes: SearchedJoke | null = null
  
  searchedInput: string = ''
  searchJoke() {
    this.jokeService.fetchSearchedJoke(this.searchedInput).subscribe((res) => {
      this.jokes = res
    })
  }
}
