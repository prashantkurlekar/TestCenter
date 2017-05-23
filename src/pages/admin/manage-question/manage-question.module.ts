import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ManageQuestionPage } from './manage-question';

@NgModule({
  declarations: [
    ManageQuestionPage,
  ],
  imports: [
    IonicPageModule.forChild(ManageQuestionPage),
  ],
  exports: [
    ManageQuestionPage
  ]
})
export class ManageQuestionPageModule {}
