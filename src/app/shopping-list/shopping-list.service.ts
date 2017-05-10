import { Ingredient } from '../shared/ingrident.model';

export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addNewIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

  // onNewIngredient(ingredient: Ingredient) {
  //   this.ingredients.push(ingredient);
  // }

}
