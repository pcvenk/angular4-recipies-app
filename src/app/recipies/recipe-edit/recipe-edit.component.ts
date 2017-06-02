import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

import {RecipeService} from "../recipies.service";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  id: number;
  editMode = false;
  editRecipe: FormGroup;

  constructor(private actRoute: ActivatedRoute,
              private recipeService: RecipeService) { }

  ngOnInit() {
    this.actRoute.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
        //if the id exists and is not null, editMode will return true
        this.editMode = params['id'] != null;
        console.log(this.editMode);
        this.formInit();
      }
    )
  }

  private formInit() {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';

    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
    }

    this.editRecipe = new FormGroup({
      'name': new FormControl(recipeName),
      'imagePath': new FormControl(recipeImagePath),
      'description': new FormControl(recipeDescription)
    })
  }

  onSubmit() {
    console.log(this.editRecipe);
  }

}
