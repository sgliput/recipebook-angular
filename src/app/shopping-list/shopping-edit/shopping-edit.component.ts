import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
 
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild("ingrForm") ingrForm: NgForm;
 
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;
 
  // @ViewChild("nameInput") nameInput: ElementRef;
  // @ViewChild("amountInput") amountInput: ElementRef;
 
  constructor(private shoppingListService: ShoppingListService) { }
 
  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing.subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.shoppingListService.getIngredient(index);
        this.ingrForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        })
      }
    )
  }
 
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
 
  onClear() {
    this.ingrForm.reset();
    this.editMode = false;
  }
 
  onSubmit() {
    const name = this.ingrForm.value.name;
    const amount = this.ingrForm.value.amount;
    const newIngredient = new Ingredient(name, amount);
 
    //If the form is not in edit mode, a new ingredient should be added
    if (!this.editMode) {
      this.shoppingListService.addIngredient(newIngredient);
      //   const name = this.nameInput.nativeElement.value;
      //   const amount = this.amountInput.nativeElement.value;
      //   if(name && amount){
      //     const newIngredient = new Ingredient(name, amount);
      //     this.shoppingListService.addIngredient(newIngredient);
      //   }
      // }
      //Otherise, in edit mode, the ingredient should simply be edited
    } else {
      this.shoppingListService.updateIngredient(this.editedItemIndex, newIngredient);
    }
    this.onClear();
  }
 
  onDelete() {
    this.shoppingListService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }
}