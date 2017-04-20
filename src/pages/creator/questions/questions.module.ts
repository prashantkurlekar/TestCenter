import { NgModule } from '@angular/core';
import { QuestionsPage } from './questions';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [QuestionsPage],
  imports: [IonicPageModule.forChild(QuestionsPage)],
})
export class QuestionsPageModule { }
