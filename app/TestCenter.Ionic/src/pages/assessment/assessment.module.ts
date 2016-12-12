import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ComponentsModule } from '../../components';
import { AssessmentPage, OptionsPage } from './';

@NgModule({
  declarations: [
    AssessmentPage, OptionsPage,
  ],
  imports: [IonicModule, ComponentsModule],
  exports: [
    AssessmentPage, OptionsPage,
  ],
  entryComponents: [],
  providers: [],
})
export class AssessmentModule { }
