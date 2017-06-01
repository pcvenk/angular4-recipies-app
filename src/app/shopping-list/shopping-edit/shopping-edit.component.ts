import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import { Ingredient } from "../../shared/ingrident.model";
import { ShoppingListService } from "../shopping-list.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  //viewChild enables the local reference to the input fields
  // @ViewChild('nameInput') nameInputRef: ElementRef;
  // @ViewChild('amountInput') amountInputRef: ElementRef;

  @ViewChild('form') submittedForm: NgForm;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onSubmit() {
    const value = this.submittedForm.value;
    // const name = this.nameInputRef.nativeElement.value;
    // const amount = this.amountInputRef.nativeElement.value;
    const addedIngredient = new Ingredient(value.name, value.amount);

    this.shoppingListService.addNewIngredient(addedIngredient);

  }

}
