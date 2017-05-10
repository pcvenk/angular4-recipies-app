import { EventEmitter } from '@angular/core';

import { Recipe } from './recipie.model';


export class RecipeService {
  onSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A test Recipe', 'This is a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('A test Recipe', 'This is a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
  ];

  getRecipes() {
    //to get a copy of the recipes array
    return this.recipes.slice();
  }

}
