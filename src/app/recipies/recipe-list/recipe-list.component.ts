import {Component, OnInit } from '@angular/core';

import { Recipe } from '../recipie.model';
import { RecipeService } from '../recipies.service';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];
  id: number;

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

}
