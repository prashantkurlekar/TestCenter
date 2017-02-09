import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import {
  AssessmentDetailPage, ManageAssessmentPage,
  AssessmentIntroductionPage, AddQuestionPage,
} from './';
import { IonicModule } from 'ionic-angular';

const pages = [
  AssessmentDetailPage, ManageAssessmentPage, AssessmentIntroductionPage, AddQuestionPage,
];

@NgModule({
  declarations: pages,
  imports: [
    IonicModule, ComponentsModule,
  ],
  entryComponents: pages,
})
export class AssessmentModule { }
