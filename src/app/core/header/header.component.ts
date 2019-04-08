import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { HttpService } from '../../shared/http.service';
import { Store } from '@ngrx/store';
import * as fromApp from "../../store/app.reducers";
import * as fromAuth from "../../auth/store/auth.reducers";
import { Observable } from 'rxjs';
import * as AuthActions from "../../auth/store/auth.actions";
import { Router } from 'node_modules/@angular/router';
//import { HttpEvent, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  authState: Observable<fromAuth.State>;

  constructor(private httpService: HttpService,
    private store: Store<fromApp.AppState>,
    private router: Router) { }

  ngOnInit() {
    this.authState = this.store.select("auth")
  }

  onSave() {
    console.log("Hello");
    this.httpService.saveRecipes().subscribe(
      (response) => {
        console.log(response);
        // (response: HttpEvent<Object>) => {
        //     This logs true during the Sent event and false for the Response event.
        //      console.log(response.type === HttpEventType.Sent);
      }, (error) => console.log(error)
    );
  }

  onFetch() {
    this.httpService.fetchRecipes();
  }

  onLogout() {
    console.log("You logged out!");
    this.store.dispatch(new AuthActions.Logout());
  }

  // isAuthenticated() {
  //   return this.authService.isAuthenticated();
  // }


}
