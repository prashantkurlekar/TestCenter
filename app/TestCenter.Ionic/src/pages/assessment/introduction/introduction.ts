import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Logger } from './../../../providers/logger';

@Component({
  selector: 'page-assessment-introduction',
  templateUrl: 'introduction.html'
})
export class AssessmentIntroductionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public logger: Logger) {
    this.logger.log(`AssessmentIntroductionPage.constructor`);
  }

  ionViewDidLoad() {
    this.logger.log(`AssessmentIntroductionPage.ionViewDidLoad`);
  }

}
