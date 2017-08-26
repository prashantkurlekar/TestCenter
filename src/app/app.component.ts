import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { TabsPage } from '../pages/tabs/tabs';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { HomePage } from '../pages/home/home';
import { SettingsPage } from '../pages/settings/settings';
import { SettingsProvider } from '../providers/settings/settings';
import { TranslateService } from '@ngx-translate/core';

export interface PageInterface {
  title: string;
  name: string;
  component: any;
  icon: string;
  logsOut?: boolean;
  index?: number;
  tabName?: string;
  tabComponent?: any;
}

@Component({
  templateUrl: 'app.html',
})
export class TestCenterApp {

  @ViewChild(Nav) public nav: Nav;
  public rootPage: any;
  public pages: PageInterface[] = [
    { title: 'Home', name: 'TabsPage', component: TabsPage, tabComponent: HomePage, index: 0, icon: 'home' },
    { title: 'Page 1', name: 'TabsPage', component: TabsPage, tabComponent: Page1, index: 1, icon: 'calendar' },
    { title: 'Page 2', name: 'TabsPage', component: TabsPage, tabComponent: Page2, index: 2, icon: 'bus' },
    { title: 'Settings', name: 'TabsPage', component: TabsPage, tabComponent: SettingsPage, index: 3, icon: 'cog' },
  ];
  public selectedTheme: String;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,
    public storage: Storage, private settings: SettingsProvider, private translate: TranslateService) {
    translate.setDefaultLang('en');
    this.settings.getActiveTheme().subscribe(val => this.selectedTheme = val);
    this.selectRootPage();
    this.platformReady();
  }

  public platformReady() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  public async selectRootPage() {
    // Check if the user has already seen the tutorial
    const hasSeenTutorial = await this.storage.get('hasSeenTutorial');
    this.rootPage = hasSeenTutorial ? TabsPage : TutorialPage;
  }

  public openPage(page: PageInterface) {
    // the nav component was found using @ViewChild(Nav)
    // setRoot on the nav to remove previous pages and only have this page
    // we wouldn't want the back button to show in this scenario
    const params = page.index ? { tabIndex: page.index } : {};

    // If we are already on tabs just change the selected tab
    // don't setRoot again, this maintains the history stack of the
    // tabs even if changing them from the menu
    if (this.nav.getActiveChildNavs().length && page.index !== undefined) {
      this.nav.getActiveChildNavs()[0].select(page.index);
      // Set the root of the nav with params if it's a tab index
    } else {
      this.nav.setRoot(page.name, params).catch((error: any) => {
        console.log(`Didn't set nav root: ${error}`);
      });
    }

    // if (page.logsOut === true) {
    //   // Give the menu time to close before changing to logged out
    //   this.userData.logout();
    // }
  }

  public isActive(page: PageInterface) {
    let childNav = this.nav.getActiveChildNavs()[0];

    // Tabs are a special case because they have their own navigation
    if (childNav) {
      if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
        return 'primary';
      }
      return;
    }

    if (this.nav.getActive() && this.nav.getActive().name === page.name) {
      return 'primary';
    }
    return;
  }

  public openTutorial = () => this.nav.setRoot(TutorialPage);
}
