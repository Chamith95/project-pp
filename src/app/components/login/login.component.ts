import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public fa: AngularFireAuth) { }

  login() {
    this.fa.auth.signInWithPopup(new auth.FacebookAuthProvider());
  }

  logout() {
    this.fa.auth.signOut();
  }

  ngOnInit() {
  }

}
