import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";

import { Recipe } from "../recipie.model";
import { Ingredient } from "../../shared/ingrident.model";
import { RecipeService } from "../recipies.service";


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  selectedRecipe: Recipe;
  id: number;

  constructor(private recipeService: RecipeService,
              private actRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.actRoute.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.selectedRecipe = this.recipeService.getRecipe(this.id);
      }
    )
  }

  toShoppinglist(ingredients: Ingredient[]) {
    this.recipeService.addIngredients(this.selectedRecipe.ingredients);
  }

  onEdit() {
    // this.router.navigate(['edit'], {relativeTo: this.actRoute});
    this.router.navigate(['/recipes/'+this.id+'/edit']);
  }

}
