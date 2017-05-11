import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TestCenterApp } from './app.component';

@NgModule({
  declarations: [
    TestCenterApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(TestCenterApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    TestCenterApp,
  ],
  providers: [
    StatusBar, SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
  ],
})
export class AppModule { }
