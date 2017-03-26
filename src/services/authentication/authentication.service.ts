import { Injectable } from '@angular/core';
import firebase from 'firebase';

@Injectable()
export class AuthenticationService {

  public fireAuth: any;
  public userProfiles: any;
  constructor() {
    this.fireAuth = firebase.auth();
    this.userProfiles = firebase.database().ref('/userProfiles');
  }

  public login(email: string, password: string): firebase.Promise<any> {
    return this.fireAuth.signInWithEmailAndPassword(email, password);
  }

  // TODO: Replace with user object
  public signup(email: string, password: string): firebase.Promise<any> {
    return this.fireAuth.createUserWithEmailAndPassword(email, password)
      .then((newUser) => {
        this.userProfiles.child(newUser.uid).set({ email: email });
      });
  }

  public resetPassword(email: string): firebase.Promise<any> {
    return this.fireAuth.sendPasswordResetEmail(email);
  }

  public logoutUser(): firebase.Promise<any> {
    return this.fireAuth.signOut();
  }

}
