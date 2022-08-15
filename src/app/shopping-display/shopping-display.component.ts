import { Items } from './../Models/items';
import { Component, OnInit } from '@angular/core';
import { ShoppingListServiceService } from '../shopping-list-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-display',
  templateUrl: './shopping-display.component.html',
  styleUrls: ['./shopping-display.component.css']
})
export class ShoppingDisplayComponent implements OnInit {
  items: Items[] = [];

  constructor(
    private shoppingListService:ShoppingListServiceService,
    private router : Router
    ) { }

  ngOnInit(): void {
    this.getlist();
  }
  getlist() {
    this.shoppingListService.getAllItems().subscribe(results=>{this.items = results.data})
  }

  deleteItem(itemId:string){
    this.shoppingListService.deleteItem(itemId).subscribe({
      next: () => {
        alert(`Item deleted`)
      },
      error: (err) => {
        console.log(err);
      },
      complete : () => {
        this.getlist();
      }
    })
  }

  goToEdit(itemId:string){
    this.router.navigate([`/edit-item/${itemId}`])
  }

}
