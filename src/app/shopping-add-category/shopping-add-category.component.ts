import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from '../categories.service';
import { Categories } from '../Models/categories';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-shopping-add-category',
  templateUrl: './shopping-add-category.component.html',
  styleUrls: ['./shopping-add-category.component.css']
})
export class ShoppingAddCategoryComponent implements OnInit {

  constructor(
    private _categoryService : CategoriesService,
    private router : Router
  ) { }


  ngOnInit(): void {
  }

  addCategory(form:Categories){
    if(form.name != ''){
      this._categoryService.createCategory(form).subscribe()
    console.log(form);
    alert("Successful");
    this.router.navigate(['/display-category']);
    }else{
      alert('Form is empty')
    }

  }
}
