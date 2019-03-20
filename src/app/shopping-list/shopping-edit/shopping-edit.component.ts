import { Component, OnInit, Output, ViewChild, ElementRef, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild("nameInput") nameInput: ElementRef;
  @ViewChild("amountInput") amountInput: ElementRef;
  @Output() addNewIngredient = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  onAddIngredient(){
    const name = this.nameInput.nativeElement.value;
    const amount = this.amountInput.nativeElement.value;
    if(name && amount){
      const newIngredient = new Ingredient(name, amount);
      this.addNewIngredient.emit(newIngredient);
    }
  }

}
