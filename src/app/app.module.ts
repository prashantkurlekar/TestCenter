import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from 'angularfire2';
import { TestCenterApp } from './app.component';
import { AngularFireDatabase } from 'angularfire2/database';
import { OrganizationService, TestService, QuestionService } from '../services';

const firebaseConfig = {
  apiKey: 'AIzaSyAT0JsPhM6gan3NiUAHHExDKhAB4f4O6SM',
  authDomain: 'test-center-77120.firebaseapp.com',
  databaseURL: 'https://test-center-77120.firebaseio.com',
  projectId: 'test-center-77120',
  storageBucket: 'test-center-77120.appspot.com',
  messagingSenderId: '547542425187',
};

@NgModule({
  declarations: [
    TestCenterApp,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    IonicModule.forRoot(TestCenterApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    TestCenterApp,
  ],
  providers: [
    StatusBar, SplashScreen, AngularFireDatabase,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    OrganizationService, TestService, QuestionService,
  ],
})
export class AppModule { }
