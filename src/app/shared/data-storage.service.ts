import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

import {RecipeService} from "../recipies/recipies.service";

()Injectable
export class DataStorageService {
 constructor(private http: Http, private recipeService: RecipeService ) {}

 storeRecipes() {
   this.http.put('https://cook-book-5a0b1.firebaseio.com/recipes.json', this.recipeService.getRecipes());
 }
}
