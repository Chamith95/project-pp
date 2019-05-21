import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth, User } from 'firebase/app';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user$: Observable<User | null>;
  constructor(private afAuth: AngularFireAuth) {
    this.user$ = this.afAuth.user;
  }

  firebaseLogin() {
    this.afAuth.auth.signInWithPopup(new auth.FacebookAuthProvider());
  }

  firebaseLogout() {
    this.afAuth.auth.signOut();
  }
}
