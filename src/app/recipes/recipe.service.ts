import { Recipe } from "./recipe.model";
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
 
@Injectable()
export class RecipeService {

    recipesChanged = new Subject<Recipe[]>();
 
    private recipes: Recipe[] = [
        new Recipe(
        "Tasty Schnitzel", 
        "A super tasty schnitzel - just awesome!", 
        "https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG",
        [
            new Ingredient("Meat", 1),
            new Ingredient("French Fries", 20)
        ]    
    ),
        new Recipe( 
        "Big Fat Burger", 
        "What else do you need to say?", "https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg",
       [
        new Ingredient("Buns", 2),
        new Ingredient("Meat", 1),
        new Ingredient("Bacon", 2)
    ]
)
      ];
 
      getRecipes() {
          return this.recipes.slice();
      }
 
      getRecipe(index:number) {
          return this.recipes.slice()[index];
      }
 
      addRecipe(recipe: Recipe) {
          this.recipes.push(recipe);
          this.recipesChanged.next(this.recipes.slice());
      }
 
      updateRecipe(index: number, updatedRecipe: Recipe) {
          this.recipes[index] = updatedRecipe;
          this.recipesChanged.next(this.recipes.slice());
      }
 
      deleteRecipe(index: number) {
          this.recipes.splice(index, 1);
          this.recipesChanged.next(this.recipes.slice());
      }

      replaceRecipes(recipes: Recipe[]) {
          this.recipes = recipes;
          this.recipesChanged.next(this.recipes.slice());
      }
  
}