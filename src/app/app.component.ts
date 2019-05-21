import { User } from 'firebase/app';
import { AuthService } from './services/auth.service';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { PostFormComponent } from './components/posts/post-form/post-form.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'afterschool';
  user: User;

<<<<<<< HEAD
  constructor(public authService: AuthService) {}
=======
  constructor(public authService: AuthService,public dialog: MatDialog) {}
>>>>>>> f209966492fda3ae13a1251bfd200bd774018104

  login() {
    this.authService.firebaseLogin();
  }

  logout() {
    this.authService.firebaseLogout();
  }
<<<<<<< HEAD
=======

  openPostForm(){
    const dialogRef = this.dialog.open(PostFormComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  
  
>>>>>>> f209966492fda3ae13a1251bfd200bd774018104
}
