import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ui-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  constructor(public authService: AuthService) {}

  ngOnInit() {}

  handleLogin() {
    this.authService.firebaseLogin();
  }

  handleLogout() {
    this.authService.firebaseLogout();
  }
}
