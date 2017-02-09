import { ServicesModule } from './../services/services.module';
import { ProviderModules } from './../providers/providers.module';
import { AssessmentModule } from './../pages/assessment/assessment.module';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { TestCenterApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { Storage } from '@ionic/storage';
// import { Autosize } from 'angular2-autosize';
import { ComponentsModule } from '../components/components.module';

const components = [
  // Autosize,
  TestCenterApp,
  AboutPage, ContactPage, HomePage, TabsPage,
];

@NgModule({
  declarations: components,
  imports: [
    IonicModule.forRoot(TestCenterApp),
    AssessmentModule, ProviderModules, ServicesModule, ComponentsModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: components,
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    Storage,
  ]
})
export class AppModule { }
