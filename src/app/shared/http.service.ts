import { Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';
import { map } from "rxjs/operators";
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';


@Injectable()
export class HttpService {
    constructor(private httpClient: HttpClient, 
                private recipeService: RecipeService) {}

    saveRecipes() {
        //const token = this.authService.getToken();
        //const headers = new HttpHeaders().set("Authorization", "Bearer ljlkjkljkl").append("","");

        // return this.httpClient.put("https://ng-recipe-book-27c7a.firebaseio.com/recipes.json", this.recipeService.getRecipes(), {
        //     observe: "body",
        //     params: new HttpParams().set("auth", token)
        //     //headers: headers
        // });
        const req = new HttpRequest("PUT", "https://ng-recipe-book-27c7a.firebaseio.com/recipes.json", this.recipeService.getRecipes(), {reportProgress: true} );
        return this.httpClient.request(req);
    }

    fetchRecipes() {

        return this.httpClient.get<Recipe[]>("https://ng-recipe-book-27c7a.firebaseio.com/recipes.json", {
            observe: "body",
            responseType: "json"
        }).pipe(map(
            (recipes) => {
                console.log(recipes);
                //const recipes: Recipe[] = response.json();
                for(let recipe of recipes) {
                    if(!recipe.ingredients) {
                        console.log(recipe);
                        recipe.ingredients = [];
                    }
                }
                return recipes;
            }
        )).subscribe(
            (recipes: Recipe[]) => {
                this.recipeService.replaceRecipes(recipes);
            }, (error) => console.log(error)
          );
    }


}