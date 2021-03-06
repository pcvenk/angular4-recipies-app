import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

import {ShoppingEditComponent} from "./shopping-edit/shopping-edit.component";
import {ShoppingListComponent} from "./shopping-list.component";

@NgModule({
  declarations: [
    ShoppingEditComponent,
    ShoppingListComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]

})
export class ShoppingListModule {}
