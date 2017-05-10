import { Component, OnInit} from '@angular/core';
import { RecipeService } from "./recipies.service";
import { Recipe } from "./recipie.model";

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
