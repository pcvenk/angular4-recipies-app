import { Component, OnInit} from '@angular/core';
import { RecipeService } from './recipies.service';

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.css'],
  providers: [RecipeService]
})

export class RecipiesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
