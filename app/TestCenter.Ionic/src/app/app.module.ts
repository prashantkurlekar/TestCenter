import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { TestCenterApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { OrganizationsPage } from '../pages/organizations/organizations';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { ProvidersModule } from '../providers/providers.module';
import { ServicesModule } from '../services/services.module';
import { LoginPage } from '../pages/login/login';
import { ResetPasswordPage } from '../pages/reset-password/reset-password';
import { SignupPage } from '../pages/signup/signup';
import { ProfilePage } from '../pages/profile/profile';

export const firebaseConfig = {
  apiKey: 'AIzaSyBwEUe6x_w_yLFrr--xYLQJLxRT2Rc8vtY',
  authDomain: 'ionic-firebase-auth-9f555.firebaseapp.com',
  databaseURL: 'https://ionic-firebase-auth-9f555.firebaseio.com',
  storageBucket: 'ionic-firebase-auth-9f555.appspot.com',
  messagingSenderId: '904481277327'
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
  OrganizationsPage,
  TabsPage,
  LoginPage, ResetPasswordPage, SignupPage, ProfilePage,
];

@NgModule({
  declarations: components,
  imports: [
    IonicModule.forRoot(TestCenterApp),
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    ProvidersModule, ServicesModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: components,
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
  ]
})
export class AppModule { ; }
