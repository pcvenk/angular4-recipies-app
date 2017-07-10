import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import {HomeComponent} from "./core/home/home.component";

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'recipes', loadChildren: './recipies/recipes.module#RecipesModule'},
  {path: 'shopping-list', component: ShoppingListComponent},
  // {path: '**', redirectTo: '/home'}
//  todo create a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
