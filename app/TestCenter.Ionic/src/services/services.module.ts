import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from 'ionic-angular';
import { AssessmentService } from './assessment/assessment.service';
import { OrganizationService } from './organization/organization.service';
import { ProfileDataService } from './profile-data/profile-data.service';
import { AuthDataService } from './auth-data/auth-data.service';

@NgModule({
  imports: [IonicModule],
  providers: [
    AssessmentService, OrganizationService, ProfileDataService, AuthDataService,
  ],
})
export class ServicesModule { }
