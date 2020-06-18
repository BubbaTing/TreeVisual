import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userValue: number;
  @Output() userSubmit = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  addUserInput() {
    this.userSubmit.emit(this.userValue);
  }

}
