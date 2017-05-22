import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

import { RecipiesComponent } from "./recipies/recipies.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";

const routes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {path: 'recipes', component: RecipiesComponent},
  {path: 'shopping-list', component: ShoppingListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
