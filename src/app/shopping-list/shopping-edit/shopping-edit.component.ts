import {
  Component, OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import { Subscription } from "rxjs/Subscription";
import { NgForm } from "@angular/forms";

import { Ingredient } from "../../shared/ingrident.model";
import { ShoppingListService } from "../shopping-list.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  //viewChild enables the local reference to the input fields
  // @ViewChild('nameInput') nameInputRef: ElementRef;
  // @ViewChild('amountInput') amountInputRef: ElementRef;

  @ViewChild('form') submittedForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editedItemIndex = index;
      }
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSubmit() {
    const value = this.submittedForm.value;
    // const name = this.nameInputRef.nativeElement.value;
    // const amount = this.amountInputRef.nativeElement.value;
    const addedIngredient = new Ingredient(value.name, value.amount);

    this.shoppingListService.addNewIngredient(addedIngredient);

  }

}
