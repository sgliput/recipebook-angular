import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {

    ingredientsChanged = new EventEmitter<Ingredient[]>();

    ingredients: Ingredient[] = [
        new Ingredient("apples", 5),
        new Ingredient("tomatoes", 10)
      ];

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    moveToShoppingList(movedIngredients: Ingredient[]) {
        // for(let ingredient of movedIngredients) {
        //     this.ingredients.push(ingredient);
        // }
        this.ingredients.push(...movedIngredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}