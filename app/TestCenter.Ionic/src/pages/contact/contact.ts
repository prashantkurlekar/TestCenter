import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { BasePage } from '../base';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage extends BasePage {

  constructor(public navCtrl: NavController) {
    super('Contacts');
  }

}
