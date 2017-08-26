import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  // tslint:disable-next-line:no-empty
  constructor() { }

  public ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
