import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BasePage } from '../../base';

@Component({
  selector: 'page-options',
  templateUrl: 'options.html',
})
export class OptionsPage implements BasePage {

  public title: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) { 
    this.title = 'Options';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OptionsPage');
  }

}
