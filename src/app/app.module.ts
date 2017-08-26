import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';

import { TestCenterApp } from './app.component';

import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { NavigationProvider } from '../providers/navigation/navigation';
import { SettingsPage } from '../pages/settings/settings';
import { SettingsProvider } from '../providers/settings/settings';

@NgModule({
  declarations: [
    TestCenterApp,
    TabsPage,
    Page1,
    Page2,
    TutorialPage,
    HomePage,
    SettingsPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(TestCenterApp, {}, { links: [] }),
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    TestCenterApp,
    TabsPage,
    Page1,
    Page2,
    TutorialPage,
    HomePage,
    SettingsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    SettingsProvider, NavigationProvider,
  ],
})
export class AppModule { }
