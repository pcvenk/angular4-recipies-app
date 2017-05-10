import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from "../../recipie.model";
import { RecipeService } from '../../recipies.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  // @Input() recipe:{
  //   imagePath: string,
  //   name: string,
  //   description: string
  // };

  //reference to the recipe model in the shared folder

  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  showMore() {
    this.recipeService.onSelected.emit(this.recipe);
  }

}
