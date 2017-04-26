import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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

  @Output() recipeDetails = new EventEmitter<void>();

  showMore() {
    this.recipeDetails.emit();
  }

  constructor() { }

  ngOnInit() {
  }

}
