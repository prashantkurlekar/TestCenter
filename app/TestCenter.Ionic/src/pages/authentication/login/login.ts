import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { BasePage } from '../../base';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage extends BasePage {

  constructor(public navCtrl: NavController) {
    super('Login');
  }

  ionViewDidLoad() {
    console.log('Hello Login Page');
  }

}
