import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TestCenterApp } from './app.component';

import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { SettingsPage } from '../pages/settings/settings';

import { NavigationProvider } from '../providers/navigation/navigation';
import { SettingsProvider } from '../providers/settings/settings';
import { FaIconComponent } from '../components/fa-icon/fa-icon';
import { AssessmentService } from '../services/assessment/assessment.service';
import { TestCenterData } from '../providers/testcenter-data';
import { ResponsiveCardListPage } from '../pages/responsive-card-list/responsive-card-list';
import { ResponsiveAppleProductsPage } from '../pages/responsive-apple-products/responsive-apple-products';
import { AssessmentDetailsPage } from '../pages/assessment-details/assessment-details';
import { AboutPage } from '../pages/about/about';
import { AboutService } from '../services/about/about.service';
import { TestPage } from '../pages/test/test';

export function createTranslateLoader(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    TestCenterApp,
    TabsPage,
    Page1,
    Page2,
    TutorialPage,
    HomePage,
    SettingsPage,
    FaIconComponent,
    ResponsiveCardListPage,
    ResponsiveAppleProductsPage,
    AssessmentDetailsPage,
    AboutPage,
    TestPage,
  ],
  imports: [
    BrowserModule, HttpModule,
    IonicModule.forRoot(TestCenterApp, {}, { links: [] }),
    IonicStorageModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [Http],
      },
    }),
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
    FaIconComponent,
    ResponsiveCardListPage,
    ResponsiveAppleProductsPage,
    AssessmentDetailsPage,
    AboutPage,
    TestPage,
  ],
  providers: [
    StatusBar, SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    SettingsProvider, NavigationProvider, TestCenterData,
    AssessmentService, AboutService,
  ],
})
export class AppModule { }
