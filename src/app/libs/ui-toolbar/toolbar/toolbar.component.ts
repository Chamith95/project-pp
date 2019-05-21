import { AuthService } from './../../../services/auth.service';
<<<<<<< HEAD
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
=======
import { Component, OnInit } from '@angular/core';
>>>>>>> eb966cc7b230c18e820c9b23710485b79f726e3a

@Component({
  selector: 'ui-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
<<<<<<< HEAD
  @Output() addPostClicked=new EventEmitter();
=======
>>>>>>> eb966cc7b230c18e820c9b23710485b79f726e3a
  constructor(public authService: AuthService) {}

  ngOnInit() {}

  handleLogin() {
    this.authService.firebaseLogin();
  }

  handleLogout() {
    this.authService.firebaseLogout();
  }
<<<<<<< HEAD

  newPostDialog(){
    this.addPostClicked.emit();
  }
=======
>>>>>>> eb966cc7b230c18e820c9b23710485b79f726e3a
}
