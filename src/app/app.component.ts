import { User } from 'firebase/app';
import { AuthService } from './services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'afterschool';
  user: User;

  constructor(public authService: AuthService) {}

  login() {
    this.authService.firebaseLogin();
  }

  logout() {
    this.authService.firebaseLogout();
  }
}
