import { Component, NgZone } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/authentication';

@Component({
  templateUrl: 'app.html',
})
export class TestCenterApp {

  public zone: NgZone;
  public rootPage: any = TabsPage;
  public firebaseConfiguration: any = {
    apiKey: 'AIzaSyAALaX7vTko0j-rfFI0pQVEH1AfOmBnWp8',
    authDomain: 'testcenter-c43c2.firebaseapp.com',
    databaseURL: 'https://testcenter-c43c2.firebaseio.com',
    storageBucket: 'testcenter-c43c2.appspot.com',
    messagingSenderId: '103800392102',
  };

  constructor(public platform: Platform, public statusBar: StatusBar, public splashscreen: SplashScreen) {
    this.initializeFirebase();
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashscreen.hide();
    });
  }

  public initializeFirebase(): void {
    firebase.initializeApp(this.firebaseConfiguration);
    this.authObserver();
  }

  public authObserver(): void {
    this.zone = new NgZone({});
    const unsubscribe: any = firebase.auth().onAuthStateChanged((user) => {
      this.zone.run(() => {
        this.rootPage = user ? TabsPage : LoginPage;
        unsubscribe();
      });
    });
  }
}
