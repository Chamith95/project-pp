import { AuthService } from './../../../services/auth.service';
<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
=======
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
>>>>>>> f209966492fda3ae13a1251bfd200bd774018104

@Component({
  selector: 'ui-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
<<<<<<< HEAD
=======
  @Output() addPostClicked=new EventEmitter();
>>>>>>> f209966492fda3ae13a1251bfd200bd774018104
  constructor(public authService: AuthService) {}

  ngOnInit() {}

  handleLogin() {
    this.authService.firebaseLogin();
  }

  handleLogout() {
    this.authService.firebaseLogout();
  }
<<<<<<< HEAD
=======

  newPostDialog(){
    this.addPostClicked.emit();
  }
>>>>>>> f209966492fda3ae13a1251bfd200bd774018104
}
