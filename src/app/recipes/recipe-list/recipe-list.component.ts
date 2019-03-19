import { Component, OnInit } from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("A Test Recipe", "This is simply a test.", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Cote_de_boeuf_p1040932.jpg/1200px-Cote_de_boeuf_p1040932.jpg")];

  constructor() { }

  ngOnInit() {
  }

}
