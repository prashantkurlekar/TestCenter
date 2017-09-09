import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { AssessmentService } from '../../services';
import { AssessmentDetailsPage } from '../assessment-details/assessment-details';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  public assessments: Array<any>;

  constructor(private navCtrl: NavController, private assessmentService: AssessmentService) { }

  public async ionViewDidLoad() {
    this.assessments = await this.assessmentService.getAssessments();
  }

  public onAssessment(assessment) {
    this.navCtrl.push(AssessmentDetailsPage, { assessment: assessment });
  }

}
