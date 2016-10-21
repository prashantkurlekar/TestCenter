import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { BasePage } from '../base';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage extends BasePage {

  public navCtrl: NavController;

  constructor(navCtrl: NavController) {
    super('Home');
    this.navCtrl = navCtrl;
  }

}
