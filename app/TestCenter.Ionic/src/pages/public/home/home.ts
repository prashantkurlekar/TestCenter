import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AssessmentService, LoggerService } from '../../../services';

import { BasePage } from '../../base';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class PublicHomePage implements BasePage {

  public title: string;
  public assessments: any;
  public filteredAssessments: any = [];

  constructor(private navController: NavController,
    private assessmentService: AssessmentService,
    private loggerService: LoggerService) {
    this.title = 'Home';
    this.assessmentService.getTop().then(assessments => {
      this.filteredAssessments = this.assessments = assessments;
    });
  }

  public filterItems(searchKeyword: any) {
    this.filteredAssessments = this.assessments;

    const keyword = searchKeyword.target.value;

    if (keyword && keyword.trim() !== '') {
      this.filteredAssessments = this.assessments.filter(assessment => {
        return (assessment.name.toLowerCase().indexOf(keyword.toLowerCase()) > -1);
      });
    }
  }

  public onAssessment(assessment): void {
    this.loggerService.log(`HomePage.onAssessment id:${assessment.id}`);
  }

}
