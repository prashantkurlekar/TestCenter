import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { AssessmentService } from '../../services/assessment/assessment.service';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  public assessments: any;

  constructor(private assessmentService: AssessmentService) { }

  public async ionViewDidLoad() {
    this.assessments = await this.assessmentService.getAssessments();
  }

  public showAssessmentDetails(assessment): void {
    console.debug(assessment);
  }
}
