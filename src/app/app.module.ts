import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';

import { Storage } from '@ionic/storage';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GoogleAnalytics } from '@ionic-native/google-analytics';

import { TestCenterApp } from './app.component';
import { ServicesModule } from '../services/services.module';
import { ProvidersModule } from '../providers/providers.module';
import { CreatorModule } from '../pages/creator/creator.module';
import { AuthenticationModule } from '../pages/authentication/authentication.module';
import { TestCenterErrorHandler } from '../providers/error-handler/error-handler';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

const components: any = [
  TestCenterApp, TabsPage,
  AboutPage, ContactPage, HomePage,
];

export function provideStorage(): Storage {
  return new Storage({});
};

@NgModule({
  declarations: components,
  imports: [
    IonicModule.forRoot(TestCenterApp),
    ProvidersModule, ServicesModule, AuthenticationModule, CreatorModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: components,
  providers: [
    { provide: ErrorHandler, useClass: TestCenterErrorHandler },
    { provide: Storage, useFactory: provideStorage },
    StatusBar, SplashScreen, GoogleAnalytics,
  ],
})
export class AppModule { }

// import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

// export const firebaseConfig: any = {
//   apiKey: 'AIzaSyAALaX7vTko0j-rfFI0pQVEH1AfOmBnWp8',
//   authDomain: 'testcenter-c43c2.firebaseapp.com',
//   databaseURL: 'https://testcenter-c43c2.firebaseio.com',
//   storageBucket: 'testcenter-c43c2.appspot.com',
//   messagingSenderId: '103800392102',
// };

// const firebaseAuthConfig: any = {
//   provider: AuthProviders.Password,
//   method: AuthMethods.Password,
// };
