import { OptionsPage } from './assessment/options/options';
import { AssessmentPage } from './assessment/assessment/assessment';
import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ComponentsModule } from '../components';
import { PublicSectionModule } from './public/public-section.module';
import { MemberSectionModule } from './member/member-section.module';

import { TabsPage } from './tabs/tabs';
import { AboutPage } from './about/about';
import { PublicHomePage } from './public/home/home';
import { ContactPage } from './contact/contact';

@NgModule({
  declarations: [
    PublicHomePage, AboutPage, ContactPage, TabsPage, AssessmentPage, OptionsPage,
  ],
  imports: [
    IonicModule, ComponentsModule,
    PublicSectionModule, MemberSectionModule,
  ],
  exports: [],
  entryComponents: [
    PublicHomePage, AboutPage, ContactPage, TabsPage, AssessmentPage, OptionsPage,
  ],
  providers: [],
})
export class PagesModule { }
