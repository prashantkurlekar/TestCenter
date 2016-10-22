import { NgModule } from '@angular/core';

import { IonicApp, IonicModule } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { ConferenceApp } from './app.component';

import { AboutPage } from '../pages/confapp/about/about';
import { PopoverPage } from '../pages/confapp/about-popover/about-popover';
import { AccountPage } from '../pages/confapp/account/account';
import { LoginPage } from '../pages/login/login';
import { MapPage } from '../pages/confapp/map/map';
import { SchedulePage } from '../pages/confapp/schedule/schedule';
import { ScheduleFilterPage } from '../pages/confapp/schedule-filter/schedule-filter';
import { SessionDetailPage } from '../pages/confapp/session-detail/session-detail';
import { SignupPage } from '../pages/signup/signup';
import { SpeakerDetailPage } from '../pages/confapp/speaker-detail/speaker-detail';
import { SpeakerListPage } from '../pages/confapp/speaker-list/speaker-list';
import { TabsPage } from '../pages/tabs/tabs';
import { TutorialPage } from '../pages/tutorial/tutorial';

import { ConferenceData } from '../providers/conference-data';
import { UserData } from '../providers/user-data';


@NgModule({
  declarations: [
    ConferenceApp,
    AboutPage,
    AccountPage,
    LoginPage,
    MapPage,
    PopoverPage,
    SchedulePage,
    ScheduleFilterPage,
    SessionDetailPage,
    SignupPage,
    SpeakerDetailPage,
    SpeakerListPage,
    TabsPage,
    TutorialPage,
  ],
  imports: [
    IonicModule.forRoot(ConferenceApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ConferenceApp,
    AboutPage,
    AccountPage,
    LoginPage,
    MapPage,
    PopoverPage,
    SchedulePage,
    ScheduleFilterPage,
    SessionDetailPage,
    SignupPage,
    SpeakerDetailPage,
    SpeakerListPage,
    TabsPage,
    TutorialPage,
  ],
  providers: [ConferenceData, UserData, Storage]
})
export class AppModule {}
