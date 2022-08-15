import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingAddCategoryComponent } from './shopping-add-category/shopping-add-category.component';
import { ShoppingAddComponent } from './shopping-add/shopping-add.component';
import { ShoppingDisplayCategoriesComponent } from './shopping-display-categories/shopping-display-categories.component';
import { ShoppingDisplayComponent } from './shopping-display/shopping-display.component';
import { ShoppingEditCategoryComponent } from './shopping-edit-category/shopping-edit-category.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';

const routes: Routes = [
  {path:'' , redirectTo:'display-item', pathMatch:'full'},
  {path:'display-item', component:ShoppingDisplayComponent},
  {path:'add-item', component:ShoppingAddComponent},
  {path:'edit-item/:id' , component: ShoppingEditComponent},
  {path:'display-category', component:ShoppingDisplayCategoriesComponent},
  {path:'add-category' , component: ShoppingAddCategoryComponent},
  {path:'edit-category/:id' , component: ShoppingEditCategoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
