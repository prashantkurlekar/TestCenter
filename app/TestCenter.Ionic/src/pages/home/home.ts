import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TestService } from '../../services';

import { BasePage } from '../base';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage implements BasePage {

  public title: string;
  public tests: any;

  constructor(public navController: NavController, public testService: TestService) {
    this.title = 'Home';
    this.testService.getTopTests().then(tests => {
      this.tests = tests;
    });
  }

}
