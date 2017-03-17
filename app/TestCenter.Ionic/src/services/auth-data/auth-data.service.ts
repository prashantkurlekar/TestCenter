import { Injectable } from '@angular/core';
import firebase from 'firebase';

@Injectable()
export class AuthDataService {

  public fireAuth: any;
  public userProfile: any;

  constructor() {
    this.fireAuth = firebase.auth();
    this.userProfile = firebase.database().ref('/userProfile');
  }

  public loginUser(email: string, password: string): firebase.Promise<any> {
    return this.fireAuth.signInWithEmailAndPassword(email, password);
  }

  public signupUser(email: string, password: string): firebase.Promise<any> {
    return this.fireAuth.createUserWithEmailAndPassword(email, password).then(newUser => {
      this.userProfile.child(newUser.uid).set({ email: email });
    });
  }

  public resetPassword(email: string): firebase.Promise<any> {
    return this.fireAuth.sendPasswordResetEmail(email);
  }

  public logoutUser(): firebase.Promise<any> {
    return this.fireAuth.signOut();
  }
}
