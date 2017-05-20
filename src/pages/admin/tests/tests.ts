import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { TestService } from '../../../services/test/test.service';

@IonicPage()
@Component({
  selector: 'page-tests',
  templateUrl: 'tests.html',
})
export class TestsPage {

  public organization: any;
  public tests: any;
  public name: string;
  public title: string;

  constructor(private navParams: NavParams, private testService: TestService) {
    this.organization = navParams.get('organization') || {};
    this.title = this.organization.title;
  }

  public async ionViewDidLoad() {
    console.log('TestsPage.ionViewDidLoad');
    console.debug(this.organization);
    this.tests = await this.testService.getTests(this.organization.$key);
  }

  public async addTest() {
    let result = await this.testService.addTest(this.organization.$key, {
      name: this.name,
    });
    console.debug(result);
    this.name = '';
  }

  public async removeTest(key: any) {
    let result = await this.testService.removeTest(this.organization.$key, key);
    console.debug(result);
  }

}
