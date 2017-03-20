import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-tests',
  templateUrl: 'tests.html',
})
export class TestsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) { ; }

  public ionViewDidLoad(): void {
    console.log('ionViewDidLoad TestsPage');
  }

}
