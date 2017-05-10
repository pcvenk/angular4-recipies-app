import {
  Component,
  OnInit,
  ViewChild,
  ElementRef
} from '@angular/core';
import { Ingredient } from "../../shared/ingrident.model";
import { ShoppingListService } from "../shopping-list.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  //viewChild enables the local reference to the input fields
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  addIngridient() {

    console.log(this.nameInputRef);
    const name = this.nameInputRef.nativeElement.value;
    const amount = this.amountInputRef.nativeElement.value;
    const addedIngredient = new Ingredient(name, amount);

    this.shoppingListService.addNewIngredient(addedIngredient);

  }

}
