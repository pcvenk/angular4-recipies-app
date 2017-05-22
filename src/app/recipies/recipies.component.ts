import { Component, OnInit } from '@angular/core';
import { Recipe } from "./recipie.model";

import { RecipeService } from "./recipies.service";

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.css'],
  providers: [RecipeService]
})

export class RecipiesComponent implements OnInit {
  recipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.onSelected.subscribe(
      (recipe: Recipe) => {
        this.recipe = recipe;
      }
    )
  }

}
