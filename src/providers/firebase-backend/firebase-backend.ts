import { Injectable } from '@angular/core';
import firebase from 'firebase';
import { Test, Question, Category } from '../../models';

@Injectable()
export class FirebaseBackend {

  public fireAuth: any;
  public userProfiles: any;
  public organizations: any;
  public tests: any;
  public questions: any;
  public categories: any;

  constructor() {
    this.fireAuth = firebase.auth();
    this.userProfiles = firebase.database().ref(`/userProfiles`);
  }

  // --------------- Authentication ---------------
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

  // --------------- Tests ---------------
  private getReferenceToTests(organization: string): void {
    this.tests = firebase.database().ref(`/organizations/${organization}/tests`);
  }

  public getTests(organization: string): firebase.database.Reference {
    console.log(`FirebaseBackend.getTests`);
    if (!this.tests) this.getReferenceToTests(organization);
    return this.tests;
  }

  public saveTest(organization: string, test: Test): firebase.Promise<any> {
    console.log(`FirebaseBackend.saveTest`);
    if (!this.tests) this.getReferenceToTests(organization);
    return this.tests.push(test);
  }

  // --------------- Categories ---------------
  private getReferenceToCategories(organization: string): void {
    this.categories = firebase.database().ref(`/organizations/${organization}/categories`);
  }

  public getCategories(organization: string): firebase.database.Reference {
    console.log(`FirebaseBackend.getCategories`);
    if (!this.categories) this.getReferenceToCategories(organization);
    return this.categories;
  }

  public saveCategory(organization: string, category: Category): firebase.Promise<any> {
    console.log(`FirebaseBackend.saveCategory`);
    if (!this.categories) this.getReferenceToCategories(organization);
    return this.categories.push(category);
  }

  // --------------- Questions ---------------
  private getReferenceToQuestions(organization: string, category: Category): void {
    this.questions = firebase.database().ref(`/organizations/${organization}/questions/${category.value}`);
  }

  public getQuestions(organization: string, category: Category): firebase.database.Reference {
    console.log(`FirebaseBackend.getQuestions`);
    if (!this.questions) this.getReferenceToQuestions(organization, category);
    return this.questions;
    // return this.questions.child(category.value);
  }

  public saveQuestion(organization: string, category: Category, question: Question): firebase.Promise<any> {
    console.log(`FirebaseBackend.saveQuestion`);
    if (!this.questions) this.getReferenceToQuestions(organization, category);
    return this.questions.push(question);
  }

}
