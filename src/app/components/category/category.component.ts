import { Component, inject, OnInit } from '@angular/core';
import { JokesService } from '../../services/jokes.service';

@Component({
  selector: 'app-category',
  imports: [],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit {
  jokeService = inject(JokesService) 
  categories: string[] = []

  ngOnInit() {
    this.jokeService.fetchCategories().subscribe((res) => {
      this.categories = res
    })
  }
}
