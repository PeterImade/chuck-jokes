import { Component, inject, OnInit } from '@angular/core';
import { JokesService } from '../../services/jokes.service';
import { Joke } from '../../models/Joke';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-category',
  imports: [CommonModule, FormsModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit {
  jokeService = inject(JokesService) 
  categories: string[] = []

  selectedCategoryIndex: number = 0 
  randomJoke: Joke | null = null

  ngOnInit() {
    this.jokeService.fetchCategories().subscribe((res) => {
      this.categories = res
    })
  }

  fetchJokeFromCategory(category: string, index: number) {
    this.selectedCategoryIndex = index
    this.jokeService.fetchRandomJokeFromCategory(category).subscribe((res) => {
      this.randomJoke = res
    }) 
  }
}
