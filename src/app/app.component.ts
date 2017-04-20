import { Component, NgZone } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
// import { TabsPage } from '../pages/tabs/tabs';
// import { LoginPage } from '../pages/authentication';
import firebase from 'firebase';
import { Logger } from '../providers';

export const firebaseConfiguration: any = {
  apiKey: 'AIzaSyDzFY8SW6k-iNnLS5MLQ7KnTZ9n0NVffWs',
  authDomain: 'test-center-7e5dc.firebaseapp.com',
  databaseURL: 'https://test-center-7e5dc.firebaseio.com',
  projectId: 'test-center-7e5dc',
  storageBucket: 'test-center-7e5dc.appspot.com',
  messagingSenderId: '303679736110',
};

@Component({
  templateUrl: 'app.html',
})
export class TestCenterApp {
  private rootPage: any = 'TabsPage';
  public zone: NgZone;

  constructor(platform: Platform, statusBar: StatusBar,
    splashScreen: SplashScreen, public logger: Logger) {
    this.logger.log(`TestCenterApp.constructor`);
    this.initializeFirebase();
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  public initializeFirebase(): void {
    this.logger.log(`TestCenterApp.initializeFirebase`);
    firebase.initializeApp(firebaseConfiguration);
    this.authObserver();
  }

  public authObserver(): void {
    this.logger.log(`TestCenterApp.authObserver`);
    this.zone = new NgZone({});
    const unsubscribe: any = firebase.auth().onAuthStateChanged((user) => {
      this.zone.run(() => {
        this.rootPage = user ? 'TabsPage' : 'LoginPage';
        unsubscribe();
      });
    });
  }
}
