import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ComponentsModule } from '../components';
import { AssessmentModule } from './assessment/assessment.module';

import { TabsPage } from './tabs/tabs';
import { AboutPage } from './about/about';
import { PublicHomePage } from './public/home/home';
import { ContactPage } from './contact/contact';

@NgModule({
  declarations: [
    TabsPage, PublicHomePage, AboutPage, ContactPage,
  ],
  imports: [ IonicModule, ComponentsModule, AssessmentModule ],
  exports: [],
  entryComponents: [
    TabsPage, PublicHomePage, AboutPage, ContactPage,
  ],
  providers: [ ],
})
export class PagesModule {}
