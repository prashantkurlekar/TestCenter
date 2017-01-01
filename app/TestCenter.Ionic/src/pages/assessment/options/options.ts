import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Assessment } from '../../../models';
import { BasePage } from '../../base';
import { AssessmentService, LoggerService } from '../../../services';

@Component({
  selector: 'page-options',
  templateUrl: './options.html',
})
export class OptionsPage implements BasePage {

  public title: string;
  public assessment: Assessment;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public loggerService: LoggerService) {
    this.title = 'Options';
    this.loggerService.log(`OptionsPage.constructor`);
  }

  public ionViewDidEnter(): void {
    this.loggerService.log(`OptionsPage.ionViewDidEnter`);
    this.assessment = this.navParams.get('assessment');
    this.title = this.assessment.shortName;
  }

}
