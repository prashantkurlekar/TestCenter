import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { TestCenterApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { SafeHttp, NetworkService, TestService } from '../services';

@NgModule({
  declarations: [
    TestCenterApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
  ],
  imports: [
    IonicModule.forRoot(TestCenterApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    TestCenterApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
  ],
  providers: [
    SafeHttp, NetworkService, TestService,
  ],
})
export class AppModule {}
