import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})
export class AssessmentDetailPage implements OnInit {
  public title: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

  ngOnInit() {
    this.title = 'Details';
  }

}
