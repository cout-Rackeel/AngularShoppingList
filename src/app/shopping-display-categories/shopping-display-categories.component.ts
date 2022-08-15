import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesService } from '../categories.service';
import { Categories } from '../Models/categories';

@Component({
  selector: 'app-shopping-display-categories',
  templateUrl: './shopping-display-categories.component.html',
  styleUrls: ['./shopping-display-categories.component.css']
})
export class ShoppingDisplayCategoriesComponent implements OnInit {

  constructor(
    private _categoryService : CategoriesService,
    private router : Router
    ) { }

    categories !: Categories[]

  ngOnInit(): void {
    this.getAllCategories();
  }

  getAllCategories(){
    this._categoryService.getAllCategories().subscribe(resp => this.categories = resp.data);
  }

  deleteCategory(categoryId:string){
    this._categoryService.deleteCategory(categoryId).subscribe({
      next: () => {
        alert(`Item deleted`)
      },
      error: (err) => {
        console.log(err);
      },
      complete : () => {
        this.getAllCategories();
      }
    })
  }

  goToEdit(categoryId:string){
    this.router.navigate([`/edit-category/${categoryId}`])
  }

}
