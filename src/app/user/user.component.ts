import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userAddingValue: number;
  reset: number;
  userDeletingValue: number;
  @Input() report: string = "place holder";
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

  // displayMessage(errorMessage:string){
  //   this.report = errorMessage;
  //   // fix displaying messages
  // }

}
