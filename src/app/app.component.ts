import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  navChosen: string = "recipes";

  onSelect(featureChoice){
    this.navChosen = featureChoice;
  }
}