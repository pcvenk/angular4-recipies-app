import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";

import {RecipeService} from "../recipies/recipies.service";
import {Recipe} from "../recipies/recipie.model";

@Injectable()
export class DataStorageService {
 constructor(private http: Http, private recipeService: RecipeService ) {}

 storeRecipes() {
   return this.http.put('https://cook-book-5a0b1.firebaseio.com/recipes.json', this.recipeService.getRecipes());
 }

 getRecipes() {
   this.http.get('https://cook-book-5a0b1.firebaseio.com/recipes.json')
     .subscribe(
       (response: Response) => {
         const recipes: Recipe[] = response.json();
         this.recipeService.setRecipes(recipes);
       }
     )
 }

}
