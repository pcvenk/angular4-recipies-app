import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipie.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'This is a test', 'https://www.google.si/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjg3Nf5tLbTAhUHZVAKHS37APkQjRwIBw&url=https%3A%2F%2Fcooking.nytimes.com%2Frecipes%2F5703-salmon-roasted-in-butter&psig=AFQjCNFNyRZzdH2YBckOulLOmFW5MnDRrg&ust=1492893787717870')
  ];

  constructor() { }

  ngOnInit() {
  }

}
