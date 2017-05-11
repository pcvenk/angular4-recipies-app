import { EventEmitter } from '@angular/core';

import { Recipe } from './recipie.model';
import { Ingredient } from "../shared/ingrident.model";


export class RecipeService {
  onSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'A super tasty Schnitzel - awesome',
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]
    ),
    new Recipe(
      'Big Juicy Burger',
      'Burger for the hungry ones',
      'https://upload.wikimedia.org/wikipedia/commons/5/5a/Burger_King_Steakhouse_XT.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Buns', 2)
      ]
    )
  ];

  getRecipes() {
    //to get a copy of the recipes array
    return this.recipes.slice();
  }

}
