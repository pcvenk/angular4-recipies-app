import { Component, OnInit, Input, Injectable } from '@angular/core';
import { Recipe } from "../recipie.model";
import { Ingredient } from "../../shared/ingrident.model";
import { RecipeService } from "../recipies.service";


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  toShoppinglist(ingredients: Ingredient[]) {
    this.recipeService.addIngredients(this.selectedRecipe.ingredients);
  }

}
