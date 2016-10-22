import { Component } from '@angular/core';

import { NavParams } from 'ionic-angular';

import { AboutPage } from '../confapp/about/about';
import { MapPage } from '../confapp/map/map';
import { SchedulePage } from '../confapp/schedule/schedule';
import { SpeakerListPage } from '../confapp/speaker-list/speaker-list';


@Component({
  templateUrl: 'tabs.html',
})
export class TabsPage {
  // set the root pages for each tab
  tab1Root: any = SchedulePage;
  tab2Root: any = SpeakerListPage;
  tab3Root: any = MapPage;
  tab4Root: any = AboutPage;
  mySelectedIndex: number;

  constructor(navParams: NavParams) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }
}
