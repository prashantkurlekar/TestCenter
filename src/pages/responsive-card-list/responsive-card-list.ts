import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-responsive-card-list',
  templateUrl: 'responsive-card-list.html',
})
export class ResponsiveCardListPage {

  public newsItems = [
    { title: 'Lorem ipsum dolor sit amet', text: 'consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.' },
    { title: 'Lorem ipsum dolor sit amet', text: 'consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.' },
    { title: 'Lorem ipsum dolor sit amet', text: 'consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.' },
    { title: 'Lorem ipsum dolor sit amet', text: 'consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.' },
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

}
