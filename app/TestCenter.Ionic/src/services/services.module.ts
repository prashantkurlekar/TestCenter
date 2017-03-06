import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from 'ionic-angular';
import { AssessmentService, OrganizationService } from './';

@NgModule({
  imports: [IonicModule],
  providers: [
    AssessmentService, OrganizationService,
  ],
})
export class ServicesModule { }
