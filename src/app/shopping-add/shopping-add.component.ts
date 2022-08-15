import { Items } from './../Models/items';

import { Component, OnInit } from '@angular/core';
import { ShoppingListServiceService } from '../shopping-list-service.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoriesService } from '../categories.service';
import { Categories } from '../Models/categories';

@Component({
  selector: 'app-shopping-add',
  templateUrl: './shopping-add.component.html',
  styleUrls: ['./shopping-add.component.css']
})
export class ShoppingAddComponent implements OnInit {

  categories !: Categories[];
  constructor(
     private ShoppingListServiceService:ShoppingListServiceService,
     private router : Router,
     private _categoryService : CategoriesService
  ){}

  ngOnInit(): void {
    this.getAllCategories();
    setTimeout(()=>{
      this.ngOnInit();
    },5000)
  }


  getAllCategories(){
    this._categoryService.getAllCategories().subscribe( resp => this.categories = resp.data)
    console.log('gotem');
  }

  onSubmit(form:any) {
    if(form.item_name !== '' && (form.price != 0 || null) && (form.quantity != 0 || null) ){
      console.log(form);
    this.ShoppingListServiceService.createItem(form).subscribe();
    alert("Successful");
    this.router.navigate(['/display-item']);
    }else{
      alert('Form is invalid')
    }

  }
}
