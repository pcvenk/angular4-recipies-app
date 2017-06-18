// /<reference path="../../../node_modules/rxjs/add/operator/map.d.ts"/>
import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import "rxjs/Rx";

import {RecipeService} from "../recipies/recipies.service";
import {Recipe} from "../recipies/recipie.model";
import {AuthService} from "../auth/auth.service";

@Injectable()
export class DataStorageService {
 constructor(private http: Http,
             private recipeService: RecipeService,
             private authService: AuthService ) {}

 storeRecipes() {
   return this.http.put('https://cook-book-5a0b1.firebaseio.com/recipes.json', this.recipeService.getRecipes());
 }

 getRecipes() {
   const token = this.authService.getToken();

   this.http.get('https://cook-book-5a0b1.firebaseio.com/recipes.json?auth=' + token)
     .map(
       (response: Response) => {
         const recipes: Recipe[] = response.json();
         for (let recipe of recipes) {
           if (!recipe['ingredients']) {
             recipe['ingredients'] = [];
           }
         }
         return recipes;
       }
     )
     .subscribe(
       (recipes: Recipe[]) => {
         this.recipeService.setRecipes(recipes);
       }
     );
 }

}
