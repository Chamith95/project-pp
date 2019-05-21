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
  constructor(public authService: AuthService,public dialog: MatDialog) {}
=======
  constructor(public authService: AuthService) {}
>>>>>>> eb966cc7b230c18e820c9b23710485b79f726e3a

  login() {
    this.authService.firebaseLogin();
  }

  logout() {
    this.authService.firebaseLogout();
  }
<<<<<<< HEAD

  openPostForm(){
    const dialogRef = this.dialog.open(PostFormComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  
  
=======
>>>>>>> eb966cc7b230c18e820c9b23710485b79f726e3a
}
