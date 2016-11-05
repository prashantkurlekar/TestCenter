import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ComponentsModule } from '../components';
import { AssessmentModule } from './assessment/assessment.module';

import { TabsPage } from './tabs/tabs';
import { AboutPage } from './about/about';
import { HomePage } from './home/home';
import { ContactPage } from './contact/contact';

@NgModule({
  declarations: [
    TabsPage, HomePage, AboutPage, ContactPage,
  ],
  imports: [ IonicModule, ComponentsModule, AssessmentModule ],
  exports: [],
  entryComponents: [
    TabsPage, HomePage, AboutPage, ContactPage,
  ],
  providers: [ ],
})
export class PagesModule {}
