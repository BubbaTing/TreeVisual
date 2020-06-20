import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tree-space',
  templateUrl: './tree-space.component.html',
  styleUrls: ['./tree-space.component.css']
})
export class TreeSpaceComponent implements OnInit {

  lists = [];
  constructor() { }

  ngOnInit(): void {
  }

  insertUserValue(value:number){
    this.lists.push(value);
    // console.log(value);
  }

}
