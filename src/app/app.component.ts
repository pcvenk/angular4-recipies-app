import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CookBook';

  loadedFeature = 'recipe';

  onSelectedFeature(feature: string) {
    this.loadedFeature = feature;
  }
}