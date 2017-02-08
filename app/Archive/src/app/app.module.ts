import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { CustomFormsModule } from 'ng2-validation'
import { TestCenterApp } from './app.component';
import { PagesModule } from '../pages/pages.module';
import { ComponentsModule } from '../components/components.module';
import { ServicesModule } from '../services/services.module';
import { TestCenterData } from '../mock-data/testcenter-data';

@NgModule({
  declarations: [
    TestCenterApp,
  ],
  imports: [
    PagesModule, ComponentsModule, ServicesModule,
    CustomFormsModule,
    IonicModule.forRoot(TestCenterApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    TestCenterApp,
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    TestCenterData,
  ]
})
export class AppModule { }
