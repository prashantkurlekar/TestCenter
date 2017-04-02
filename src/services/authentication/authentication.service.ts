import { Injectable } from '@angular/core';
import firebase from 'firebase';
import { FirebaseBackend } from "../../providers/firebase-backend/firebase-backend";

@Injectable()
export class AuthenticationService {

  constructor(public backend: FirebaseBackend) {
  }

  public login(email: string, password: string): firebase.Promise<any> {
    // return this.fireAuth.signInWithEmailAndPassword(email, password);
    return this.backend.login(email, password);
  }

  // TODO: Replace with user object
  public signup(email: string, password: string): firebase.Promise<any> {
    // return this.fireAuth.createUserWithEmailAndPassword(email, password)
    //   .then((newUser) => {
    //     this.userProfiles.child(newUser.uid).set({ email: email });
    //   });
    return this.backend.signup(email, password);
  }

  public resetPassword(email: string): firebase.Promise<any> {
    // return this.fireAuth.sendPasswordResetEmail(email);
    return this.backend.resetPassword(email);
  }

  public logoutUser(): firebase.Promise<any> {
    // return this.fireAuth.signOut();
    return this.backend.logoutUser();
  }

}
