import {Component, OnInit, Output, EventEmitter} from '@angular/core';

import { Recipe } from '../recipie.model';
import { RecipeService } from '../recipies.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() selectedElement = new EventEmitter<Recipe>();

  recipes: Recipe[];

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  recipeSelected(recipe: Recipe) {
    this.selectedElement.emit(recipe);
  }

}
