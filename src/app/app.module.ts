import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingAddComponent } from './shopping-add/shopping-add.component';
import { ShoppingDisplayComponent } from './shopping-display/shopping-display.component';
import { ShoppingListServiceService } from './shopping-list-service.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppingAddCategoryComponent } from './shopping-add-category/shopping-add-category.component';
import { ShoppingEditCategoryComponent } from './shopping-edit-category/shopping-edit-category.component';
import { ShoppingDisplayCategoriesComponent } from './shopping-display-categories/shopping-display-categories.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingAddComponent,
    ShoppingDisplayComponent,
    ShoppingEditComponent,
    ShoppingAddCategoryComponent,
    ShoppingEditCategoryComponent,
    ShoppingDisplayCategoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ShoppingListServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
