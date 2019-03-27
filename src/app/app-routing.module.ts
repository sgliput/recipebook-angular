import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { NgModule } from '../../node_modules/@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';


const appRoutes: Routes = [
    {path: "", redirectTo: "/recipes", pathMatch: "full"},
    {path: "recipes", component: RecipesComponent, children: [
        {path: "", component: RecipeStartComponent},
        {path: "new", component: RecipeEditComponent},
        {path: ":id", component: RecipeDetailComponent},
        {path: ":id/edit", component: RecipeEditComponent}
    ]},
    {path: "shoppinglist", component: ShoppingListComponent},
    
  ]

  @NgModule({
      imports: [
          RouterModule.forRoot(appRoutes)
      ],
      exports: [RouterModule]
  })
export class AppRoutingModule {

}