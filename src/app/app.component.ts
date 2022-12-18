import { Component } from '@angular/core';
import { Item, Model } from './model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-recap';
  model = new Model()
  displayAll = true;
  username = this.model.username
  addItem(value:string){
    if (value.trim()){
      // console.log(this.model.items.forEach())
      return this.model.items.push(new Item(value, false));
      
    }
    return this.model.items
  }
  getItems(){
    if(!this.displayAll){
      return this.model.items.filter(item => !item.completed)
    }
    return this.model.items
  }
}
