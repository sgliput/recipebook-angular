import { Recipe } from "./recipe.model";
import { EventEmitter } from "@angular/core";
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
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

    recipeSelected = new EventEmitter<Recipe>();
}