import { NgModule } from '@angular/core';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
//import { AuthGuard } from './auth/auth-guard.service';
import { HomeComponent } from './core/home/home.component';


const appRoutes: Routes = [
    { path: "shoppinglist", component: ShoppingListComponent },
    { path: "shoppinglist/:anything", redirectTo: "/shoppinglist" },
    {
        path: "recipes", loadChildren: "./recipes/recipes.module#RecipesModule", //canLoad: [AuthGuard]
    },
    { path: "", component: HomeComponent, pathMatch: "full" }
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}