import {Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import { Recipe } from '../recipie.model';
import { RecipeService } from '../recipies.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];
  id: number;

  constructor(private recipeService: RecipeService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.recipeService.recipesChanged.subscribe(
      (recipes) => {
        this.recipes = recipes;
      }
    );
    this.recipes = this.recipeService.getRecipes();
  }

  onAddNew() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
