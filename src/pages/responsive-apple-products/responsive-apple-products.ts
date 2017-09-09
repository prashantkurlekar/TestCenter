import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-responsive-apple-products',
  templateUrl: 'responsive-apple-products.html',
})
export class ResponsiveAppleProductsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  public ionViewDidLoad() {
    console.log('ionViewDidLoad ResponsiveAppleProductsPage');
  }

}
