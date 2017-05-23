import { Component } from '@angular/core';
import { IonicPage, NavParams, NavController } from 'ionic-angular';
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

  constructor(private navParams: NavParams, private testService: TestService,
    private navController: NavController) {
    this.organization = navParams.get('organization') || {};
    this.title = this.organization.name;
  }

  public async ionViewDidLoad() {
    console.log('TestsPage.ionViewDidLoad');
    this.tests = await this.testService.getTests(this.organization.$key);
  }

  public async addTest() {
    await this.testService.addTest(this.organization.$key, {
      name: this.name,
    });
    this.name = '';
  }

  public async removeTest(key: any) {
    await this.testService.removeTest(this.organization.$key, key);
  }

  public onQuestions(): void {
    this.navController.push('QuestionsPage', { organization: this.organization });
  }

}
