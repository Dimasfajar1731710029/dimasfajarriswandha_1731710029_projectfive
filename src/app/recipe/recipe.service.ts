import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe/recipe.model';
import { Ingredient } from '../shopping-list/shopping-edit/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  //property:class recipe
  private recipes:Recipe[]=[
    new Recipe('Bakso',
    'Bakso ini merupakan olahan daging dan tepung yg dibentuk bulat dan terdapat kuah kaldu sapi yg nikmat',
  '../src/app/img/Bakso.jpg',
[
  new Ingredient('meal',1),
  new Ingredient('tomato',2)
]),
  new Recipe('Siomay',
  'Siomay ini adalah olahan kripik pangsit dan juga olahan daging ayam atau ikan yg dibuat mirip dengan bakso namun cara membuatnya yg berbeda',
  '../src/app/img/somay.jpg',
[
  new Ingredient('chicken',1),
  new Ingredient('meal',3),
  new Ingredient('soy sauce',1)
]),
  ];

  getRecipes(){
    return this.recipes.slice();
  }
  addIngredientsShoppingList(ingredients: Ingredient[]){
    this.slsService.addIngredients(ingredients);
  }
  getRecipe(index:number){
    return this.recipes[index];
  }

constructor(private slsService: ShoppingListService) { }

}
