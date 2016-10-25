import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TestService } from '../../services';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  public tests: any;

  constructor(public navController: NavController, public testService: TestService) {
    this.testService.getTopTests().then(tests => {
      this.tests = tests;
    });
  }

}
