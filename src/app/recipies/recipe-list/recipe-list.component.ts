import {Component, OnInit, Output, EventEmitter} from '@angular/core';

import { Recipe } from '../recipie.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() selectedElement = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'This is a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('A test Recipe', 'This is a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
  ];

  constructor() {
  }

  ngOnInit() {
  }

  recipeSelected(recipe: Recipe) {
    this.selectedElement.emit(recipe);
  }

}
