import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { AssessmentService } from './assessment/assessment.service';

@NgModule({
  imports: [
    IonicModule,
  ],
  providers: [
    AssessmentService,
  ],
})
export class ServicesModule { }
