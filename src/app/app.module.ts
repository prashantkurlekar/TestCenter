import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from 'angularfire2';
import { TestCenterApp } from './app.component';
import { OrganizationService } from '../services/organization/organization.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { TestService } from '../services/test/test.service';

const firebaseConfig = {
  apiKey: 'AIzaSyCVKRFEOFzAxGsw7CuPsKRXFQWGgTJG3Jk',
  authDomain: 'groot-4cc76.firebaseapp.com',
  databaseURL: 'https://groot-4cc76.firebaseio.com',
  projectId: 'groot-4cc76',
  storageBucket: 'groot-4cc76.appspot.com',
  messagingSenderId: '627769475589',
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
    OrganizationService, TestService,
  ],
})
export class AppModule { }
