import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tree-space',
  templateUrl: './tree-space.component.html',
  styleUrls: ['./tree-space.component.css']
})
export class TreeSpaceComponent implements OnInit {

  lists = [];
  messages:string;

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
      this.messages = "Error: Cannot find this value!";
    } else {
      this.lists.splice(result, 1);
      this.messages = "Value is removed";
    }
      
  }

}
