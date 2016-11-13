import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { TestCenterApp } from './app.component';
import { PagesModule } from '../pages/pages.module';
import { ComponentsModule } from '../components/components.module';
import { ServicesModule } from '../services/services.module';

@NgModule({
  declarations: [
    TestCenterApp,
  ],
  imports: [
    PagesModule, ComponentsModule, ServicesModule,
    IonicModule.forRoot(TestCenterApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    TestCenterApp,
  ],
  providers: [],
})
export class AppModule {}
