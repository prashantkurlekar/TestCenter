import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { TestCenterApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

export const firebaseConfig = {
  apiKey: 'AIzaSyAALaX7vTko0j-rfFI0pQVEH1AfOmBnWp8',
  authDomain: 'testcenter-c43c2.firebaseapp.com',
  databaseURL: 'https://testcenter-c43c2.firebaseio.com',
  storageBucket: 'testcenter-c43c2.appspot.com',
  // storageBucket: '',
  messagingSenderId: '103800392102'
};
const firebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
}
const components = [
  TestCenterApp,
  AboutPage,
  ContactPage,
  HomePage,
  TabsPage
];

@NgModule({
  declarations: components,
  imports: [
    IonicModule.forRoot(TestCenterApp),
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: components,
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule { ; }
