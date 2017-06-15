import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'CookBook';

  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyBMTEqQOAdj3qdU8RggEC7HQuwG2ftkZSc",
      authDomain: "cook-book-5a0b1.firebaseapp.com",
    })
  }

  onSelectedFeature(feature: string) {
    this.loadedFeature = feature;
  }
}
