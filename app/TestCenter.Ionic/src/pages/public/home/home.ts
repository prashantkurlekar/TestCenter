import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AssessmentService, LoggerService } from '../../../services';
import { BasePage } from '../../base';
import { OptionsPage } from '../../assessment';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class PublicHomePage implements BasePage {

  public title: string;
  public assessments: any;
  public filteredAssessments: any = [];

  constructor(public navController: NavController, public assessmentService: AssessmentService,
              private loggerService: LoggerService) {
    this.loggerService.log('PublicHomePage.constructor');
    this.title = 'Home';
    this.assessmentService.getAssessments().then(assessments => {
      this.filteredAssessments = this.assessments = assessments;
    });
  }

  public filterItems(searchKeyword: any) {
    this.filteredAssessments = this.assessments;
    const keyword = searchKeyword.target.value;
    if (keyword && keyword.trim() !== '') {
      this.filteredAssessments = this.assessments.filter((assessment: any) => {
        return (assessment.name.toLowerCase().indexOf(keyword.toLowerCase()) > -1);
      });
    }
  }

  public onAssessment(assessment: any): void {
    this.loggerService.log(`HomePage.onAssessment id:${assessment.id}`);
    this.navController.push(OptionsPage, { assessmentId: assessment.id });
  }

}
