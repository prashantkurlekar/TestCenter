import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { BasePage } from '../base';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage extends BasePage {
  public user;

  constructor(public navCtrl: NavController) {
    super('Home');
    this.user = {
      name: 'barney',
      age: 36,
      active: true,
    };
  }
}
