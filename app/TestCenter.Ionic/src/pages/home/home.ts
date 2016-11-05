import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AssessmentService } from '../../services';

import { BasePage } from '../base';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage implements BasePage {

  public title: string;
  public assessments: Array<any>;

  constructor(public navController: NavController, public assessmentService: AssessmentService) {
    this.title = 'Home';
    this.assessmentService.getAssessments().then(assessments => {
      this.assessments = assessments;
    });
  }

}
