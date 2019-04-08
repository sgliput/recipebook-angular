import * as firebase from "firebase";
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromAuth from "../auth/store/auth.reducers";
import * as AuthActions from "../auth/store/auth.actions";

@Injectable()
export class AuthService {
    //token: string;

    //constructor(private router: Router, private store: Store<fromAuth.State>) {}

    // signupUser(email: string, password: string) {
    //     firebase.auth().createUserWithEmailAndPassword(email, password)
    //         .then(
    //             user => {
    //                 this.router.navigate(["/recipes"]);
    //                 this.store.dispatch(new AuthActions.Signup());
    //                 firebase.auth().currentUser.getIdToken()
    //                 .then(
    //                     (token: string) => {
    //                         this.store.dispatch(new AuthActions.SetToken(token));
    //                     }
    //                 )
    //             }
    //         ).catch(
    //             error => console.log(error)
    //         )
    // }

    // signinUser(email: string, password: string) {
    //     firebase.auth().signInWithEmailAndPassword(email, password)
    //         .then(
    //             response => {
    //                 console.log("You're logged in!");
    //                 this.store.dispatch(new AuthActions.Signin());
    //                 this.router.navigate(["/recipes"]);
    //                 firebase.auth().currentUser.getIdToken()
    //                 .then(
    //                     (token: string) => {
    //                         this.store.dispatch(new AuthActions.SetToken(token));
    //                     }
    //                 )
    //             }
    //         ).catch(
    //             error => console.log(error)
    //         )
    // }

    // getToken() {
    //     firebase.auth().currentUser.getIdToken()
    //     .then(
    //         (token: string) => {
    //             this.token = token;
    //         }
    //     );
    //     return this.token;
    // }

    // isAuthenticated() {
    //     return this.token != null
    // }

    // logout() {
    //     firebase.auth().signOut();
    // }
}