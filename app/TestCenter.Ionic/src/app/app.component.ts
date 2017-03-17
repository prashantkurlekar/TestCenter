import { Component, NgZone } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import firebase from 'firebase';

@Component({
  templateUrl: 'app.html',
})
export class TestCenterApp {

  public rootPage: any = TabsPage;
  public zone: NgZone;

  constructor(platform: Platform) {
    this.authObserver();

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  public authObserver(): void {
    this.zone = new NgZone({});
    firebase.initializeApp({
      apiKey: 'AIzaSyBwEUe6x_w_yLFrr--xYLQJLxRT2Rc8vtY',
      authDomain: 'ionic-firebase-auth-9f555.firebaseapp.com',
      databaseURL: 'https://ionic-firebase-auth-9f555.firebaseio.com',
      storageBucket: 'ionic-firebase-auth-9f555.appspot.com',
      messagingSenderId: '904481277327'
    });

    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      this.zone.run(() => {
        if (!user) {
          this.rootPage = LoginPage;
          unsubscribe();
        } else {
          this.rootPage = TabsPage;
          unsubscribe();
        }
      });
    });
  }
}
