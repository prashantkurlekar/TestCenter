import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { TestCenterApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GoogleAnalytics } from '@ionic-native/google-analytics';

import { AuthenticationModule } from '../pages/authentication/authentication.module';
import { ProvidersModule } from '../providers/providers.module';
import { ServicesModule } from '../services/services.module';
import { CreatorModule } from '../pages/creator/creator.module';

const components: any = [
  TestCenterApp,
  TabsPage, AboutPage, HomePage,
];

@NgModule({
  declarations: [...components],
  imports: [
    IonicModule.forRoot(TestCenterApp),
    AuthenticationModule, CreatorModule,
    ProvidersModule, ServicesModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [...components],
  providers: [
    StatusBar, SplashScreen, GoogleAnalytics,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
  ],
})
export class AppModule { }
