import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { TestCenterApp } from './app.component';
import { PagesModule } from '../pages/pages.module';
import { ComponentsModule } from '../components/components.module';
import {
  SafeHttp, NetworkService, AssessmentService,
  LoggerService, StorageService } from '../services';

@NgModule({
  declarations: [
    TestCenterApp,
  ],
  imports: [
    PagesModule, ComponentsModule,
    IonicModule.forRoot(TestCenterApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    TestCenterApp,
  ],
  providers: [
    SafeHttp, NetworkService, AssessmentService, LoggerService, StorageService,
  ],
})
export class AppModule {}
