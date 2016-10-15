import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { TestCenterApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/authentication/login/login';

@NgModule({
  declarations: [
    TestCenterApp,
    AboutPage, ContactPage, HomePage,
    TabsPage,
    LoginPage,
  ],
  imports: [
    IonicModule.forRoot(TestCenterApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    TestCenterApp,
    AboutPage, ContactPage, HomePage,
    TabsPage,
    LoginPage,
  ],
  providers: [],
})
export class AppModule {}
