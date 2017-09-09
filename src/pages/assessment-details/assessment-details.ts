import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TestPage } from '../test/test';

@IonicPage()
@Component({
  selector: 'page-assessment-details',
  templateUrl: 'assessment-details.html',
})
export class AssessmentDetailsPage {

  public assessment: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  public ionViewWillEnter() {
    console.log('AssessmentDetailsPage.ionViewWillEnter');
    this.assessment = this.navParams.get('assessment');
  }

  public onMockTest() {
    console.debug(this.assessment);
    this.navCtrl.push(TestPage, { assessment: this.assessment });
  }

  public onCategory(category) {
    this.navCtrl.push(TestPage, { assessment: this.assessment, category: category });
  }

}
