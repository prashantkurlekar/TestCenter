import { Component, ViewChild } from '@angular/core';
import { MenuController, NavController, Slides } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html',
})

export class TutorialPage {
  public showSkip = true;

  @ViewChild('slides') public slides: Slides;

  constructor(public navCtrl: NavController, public menu: MenuController, public storage: Storage) { }

  public startApp() {
    this.navCtrl.push(TabsPage).then(() => {
      this.storage.set('hasSeenTutorial', 'true');
    });
  }

  public onSlideChangeStart = (slider: Slides) => this.showSkip = !slider.isEnd();

  public ionViewWillEnter() {
    this.slides.update();
  }

  public ionViewDidEnter() {
    // the root left menu should be disabled on the tutorial page
    this.menu.enable(false);
  }

  public ionViewDidLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }

}
