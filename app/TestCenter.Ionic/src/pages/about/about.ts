import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BasePage } from '../base';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage extends BasePage {
  constructor(public navController: NavController) {
    super('About');
  }
}
