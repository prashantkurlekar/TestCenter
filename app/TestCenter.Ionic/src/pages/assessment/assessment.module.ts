import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ComponentsModule } from '../../components';
import { AssessmentPage } from './assessment/assessment';

@NgModule({
  declarations: [
    AssessmentPage,
  ],
  imports: [ IonicModule, ComponentsModule ],
  exports: [
    AssessmentPage,
  ],
  entryComponents: [],
  providers: [ ],
})
export class AssessmentModule {}
