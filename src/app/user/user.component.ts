import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userAddingValue: number;
  reset: number;
  userDeletingValue: number;
  report: string;
  @Output() userSubmit = new EventEmitter();
  @Output() userRequest = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  addUserInput() {
    this.userSubmit.emit(this.userAddingValue);
    this.userAddingValue = this.reset;
    // console.log("User values is ", this.userValue);
  }

  removeUserInput() {
    this.userRequest.emit(this.userDeletingValue);
    this.userDeletingValue = this.reset;
  }

  displayMessage(report:string){
    this.report = report;
    // fix displaying messages
  }

}
