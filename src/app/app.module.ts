import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { TestCenterApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ProvidersModule } from '../providers/providers.module';
import { CreatorModule } from '../pages/creator/creator.module';
import { Storage } from '@ionic/storage';
import { ServicesModule } from '../services/services.module';

const components: any = [
  TestCenterApp, TabsPage,
  AboutPage, ContactPage, HomePage,
];

export function provideStorage(): Storage {
  return new Storage({});
};

@NgModule({
  declarations: components,
  imports: [
    IonicModule.forRoot(TestCenterApp),
    ProvidersModule, CreatorModule, ServicesModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: components,
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    { provide: Storage, useFactory: provideStorage },
  ],
})
export class AppModule { }
