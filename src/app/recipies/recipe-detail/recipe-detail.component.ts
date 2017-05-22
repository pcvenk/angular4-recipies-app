import { Component, OnInit } from '@angular/core';
import { Recipe } from "../recipie.model";
import { Ingredient } from "../../shared/ingrident.model";
import { RecipeService } from "../recipies.service";
import {ActivatedRoute, Params} from "@angular/router";


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  selectedRecipe: Recipe;
  id: number;

  constructor(private recipeService: RecipeService,
              private actRoute: ActivatedRoute) { }

  ngOnInit() {
    this.actRoute.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
      }
    )
  }

  toShoppinglist(ingredients: Ingredient[]) {
    this.recipeService.addIngredients(this.selectedRecipe.ingredients);
  }

}
