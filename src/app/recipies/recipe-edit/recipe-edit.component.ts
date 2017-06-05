import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";

import {RecipeService} from "../recipies.service";
import {Recipe} from "../recipie.model";

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
    let recipeIngredients = new FormArray([]);

    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;

      if (recipe['ingredients']) {
        for (let ingredient of recipe.ingredients) {
         recipeIngredients.push(
           new FormGroup({
             'name': new FormControl(ingredient.name, Validators.required),
             'amount': new FormControl(ingredient.amount, [
               Validators.required,
               Validators.pattern(/^[1-9]+[0-9]*$/)
             ])
           })
         );
        }
      }
    }

    this.editRecipe = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imagePath': new FormControl(recipeImagePath, Validators.required),
      'description': new FormControl(recipeDescription, Validators.required),
      'ingredients': recipeIngredients
    })
  }

  onSubmit() {
    //getting form values
    const newRecipe = new Recipe(
      this.editRecipe.value['name'],
      this.editRecipe.value['imagePath'],
      this.editRecipe.value['description'],
      this.editRecipe.value['ingredients']
    );

    if (this.editMode) {
      this.recipeService.editRecipe(this.id, newRecipe)
    } else {
      this.recipeService.addRecipe(newRecipe)
    }
  }

  onAddIngredient() {
    (<FormArray>this.editRecipe.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      })
    )
  }

}
