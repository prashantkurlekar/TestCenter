import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, LoadingController, Loading } from 'ionic-angular';
import { TestService } from '../../../services';
import { Logger } from '../../../providers';
import { TestPage } from '../test/test';

@Component({
  selector: 'page-tests',
  templateUrl: 'tests.html',
})
export class TestsPage implements OnInit {

  public tests: any;
  public loading: Loading;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public testService: TestService, public logger: Logger,
    public loadingController: LoadingController) {
    this.logger.log(`TestsPage.constructor`);
  }

  public ngOnInit(): void {
    this.logger.log(`TestsPage.ngOnInit`);
    this.testService.testList(`rms-nsw`).on('value', snapshot => {
      let rawList: any = [];
      snapshot.forEach(snap => {
        rawList.push({
          id: snap.key,
          name: snap.val().name,
          description: snap.val().description,
        });
        return false;
      });
      this.tests = rawList;
      this.loading.dismiss();
    });
    this.showLoading();
  }

  public ionViewDidLoad(): void {
    this.logger.log(`TestsPage.ionViewDidLoad`);
  }

  public add(): void {
    this.navCtrl.push(TestPage);
  }

  public showLoading(): void {
    this.loading = this.loadingController.create({ dismissOnPageChange: true });
    this.loading.present();
  }

  public goToTest(test: any): void {
    this.logger.log(test);
  }

}
