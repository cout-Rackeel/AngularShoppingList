import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from '../categories.service';
import { Categories } from '../Models/categories';

@Component({
  selector: 'app-shopping-edit-category',
  templateUrl: './shopping-edit-category.component.html',
  styleUrls: ['./shopping-edit-category.component.css']
})
export class ShoppingEditCategoryComponent implements OnInit {

  constructor(
    private _categoryService : CategoriesService,
    private _activatedRoute : ActivatedRoute,
    private router : Router
  ) { }

  selectedCategory!: Categories;
  categoriesId = this._activatedRoute.snapshot.params['id'];

  ngOnInit(): void {
    this.getCategory();
  }

  getCategory(){
    this._categoryService.getCategoryById(this.categoriesId).subscribe(resp => this.selectedCategory = resp.data)
  }

  editCategory(form:any){

    let body :Categories = {
      _id:this.categoriesId,
      name: form.name
    }

    this._categoryService.updateCategory(this.categoriesId , body).subscribe();
    alert("Successfully Edited");
    this.router.navigate(['/display-category']);
  }
}
