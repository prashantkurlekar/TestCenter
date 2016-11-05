import { NgModule }         from '@angular/core';
import { IonicModule }      from 'ionic-angular';
import { ComponentsModule } from '../components';
import { AssessmentModule } from './assessment/assessment.module';

@NgModule({
  declarations: [],
  imports: [ IonicModule, ComponentsModule, AssessmentModule ],
  exports: [],
  entryComponents: [],
  providers: [ ],
})
export class PagesModule {}
