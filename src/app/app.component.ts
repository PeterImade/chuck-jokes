import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { JokesService } from './services/jokes.service';
import { FormsModule } from '@angular/forms';
import { Joke, SearchedJoke } from './models/Joke';
import { HomeComponent } from './components/home/home.component';
import { state } from '@angular/animations';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  searchInput: string = ''
  jokeService = inject(JokesService)
  router = inject(Router)
  jokes: SearchedJoke | null = null
  searchJoke() { 
    this.jokeService.fetchSearchedJoke(this.searchInput).subscribe((res) => {
      this.jokes = res  
      this.router.navigate(['home'], {state: {searchedInput: this.searchInput, jokes: this.jokes}})
      })
  }
}
