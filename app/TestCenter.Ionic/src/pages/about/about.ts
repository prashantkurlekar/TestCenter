import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: './about.html',
})
export class AboutPage {

  public title: string;

  constructor(public navCtrl: NavController) {
    this.title = 'About';
  }
}
