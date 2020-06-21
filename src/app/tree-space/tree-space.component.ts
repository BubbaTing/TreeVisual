import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tree-space',
  templateUrl: './tree-space.component.html',
  styleUrls: ['./tree-space.component.css']
})
export class TreeSpaceComponent implements OnInit {

  lists = [];
  @Output() messages =  new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  insertUserValue(value:number){
    this.lists.push(value);
    // console.log(value);
  }

  removeUserValue(removeValue:number){
    const result = this.lists.indexOf(removeValue);
    if( result < 0){
      this.messages.emit("Error: Cannot find this value!")
    } else {
      this.lists.splice(result, 1);
      this.messages.emit("Value is removed")
    }
      
  }

}
