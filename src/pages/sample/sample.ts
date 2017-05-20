import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-sample',
  templateUrl: 'sample.html',
})
export class SamplePage {

  constructor() { ; }

  public ionViewDidLoad() {
    console.log('SamplePage.ionViewDidLoad');
  }

}
