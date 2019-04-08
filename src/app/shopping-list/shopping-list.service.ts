import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';
 
export class ShoppingListService {
 
    ingredientsChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();
 
    ingredients: Ingredient[] = [
        new Ingredient("apples", 5),
        new Ingredient("tomatoes", 10)
      ];
 
    getIngredients() {
        return this.ingredients.slice();
    }
 
    getIngredient(index: number) {
        return this.ingredients[index];
    }
 
    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
 
    moveToShoppingList(movedIngredients: Ingredient[]) {
        // for(let ingredient of movedIngredients) {
        //     this.ingredients.push(ingredient);
        // }
        this.ingredients.push(...movedIngredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
 
    updateIngredient(index: number, updatedIngredient: Ingredient) {
        this.ingredients[index] = updatedIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    }
 
    deleteIngredient(index: number) {
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}