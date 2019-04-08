import * as fromAuth from "../auth/store/auth.reducers";
import { ActionReducerMap } from '../../../node_modules/@ngrx/store';
//import * as fromShoppingList from "../shopping-list/store/shopping-list.reducers";


export interface AppState {
    auth: fromAuth.State,
    //shoppingList: fromShoppingList.State
}

export const reducers: ActionReducerMap<AppState> = {
    auth: fromAuth.authReducer
}