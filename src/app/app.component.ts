import { Component } from '@angular/core';
import { Item, Model } from './model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-recap';
  inputtask = ""
  model = new Model()
  displayAll = false;
  username = this.model.username
  addItem(){
    if (this.inputtask.trim()){
      // console.log(this.model.items.forEach())
      this.model.items.push(new Item(this.inputtask, false));
      this.inputtask = ""
      
    }
    this.model.items
    this.inputtask = ""
  }
  getItems(){
    if(!this.displayAll){
      return this.model.items.filter(item => !item.completed)
    }
    return this.model.items
  }
  displayCount(){
    return this.model.items.filter(item => item.completed).length
  }
}
