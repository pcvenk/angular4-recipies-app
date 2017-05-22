import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from "../../recipie.model";

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

  ngOnInit() {
  }


}
