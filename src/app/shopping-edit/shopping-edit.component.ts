import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Items } from '../Models/items';
import { ShoppingListServiceService } from '../shopping-list-service.service';
import { NgForm } from '@angular/forms';
import { CategoriesService } from '../categories.service';
import { Categories } from '../Models/categories';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor(
    private shoppingService: ShoppingListServiceService,
    private _activatedRoute : ActivatedRoute,
    private router : Router,
    private _categoryService : CategoriesService
  ) { }

  selectedItem!: Items;
  itemId = this._activatedRoute.snapshot.params['id'];
  categories !: Categories[];


  ngOnInit(): void {
    this.getItem();
    this.getAllCategories()
  }

  getItem(){
   this.shoppingService.getItemById(this.itemId).subscribe(resp => this.selectedItem = resp.data)
  }

  getAllCategories(){
    this._categoryService.getAllCategories().subscribe( resp => this.categories = resp.data)
    console.log('gotem');
  }

  edit(editForm:any) {
    let body : Items = {
    _id:this.itemId,
    item_name:editForm.item_name,
    category: editForm.category,
    price:editForm.price,
    quantity:editForm.quantity
    }
    console.log(editForm);
    this.shoppingService.updateItem(this.itemId , body).subscribe()
    alert("Successfully Edited");
    this.router.navigate(['/display-item']);
  }

}
