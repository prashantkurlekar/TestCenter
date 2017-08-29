import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { SettingsProvider } from '../../providers/settings/settings';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  public selectedTheme: String;

  constructor(public navCtrl: NavController, private settings: SettingsProvider) {
    this.settings.getActiveTheme().subscribe(val => this.selectedTheme = val);
  }

  public ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  // public toggleAppTheme = () => this.settings.setActiveTheme(this.selectedTheme === 'dark-theme' ? 'default-theme' : 'dark-theme');
  public toggleAppTheme = (theme) => { this.settings.setActiveTheme(theme); console.debug(theme); };

}

// https://devdactic.com/dynamic-theming-ionic/
