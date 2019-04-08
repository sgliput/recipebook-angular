import { Component, OnInit } from '@angular/core';
import * as firebase from "firebase";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyCpH8OBYg_Q9bo6F9Js5E1KRo6mSAx26YU",
      authDomain: "ng-recipe-book-27c7a.firebaseapp.com",
    })
  }

}