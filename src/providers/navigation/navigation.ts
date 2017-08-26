import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { TabsPage } from '../../pages/tabs/tabs';
import { Page1 } from '../../pages/page1/page1';
import { Page2 } from '../../pages/page2/page2';
import { HomePage } from '../../pages/home/home';

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

@Injectable()
export class NavigationProvider {

  private pages = [
    { title: 'Page 1', name: 'TabsPage', component: TabsPage, tabComponent: Page1, index: 0, icon: 'calendar' },
    { title: 'Page 2', name: 'TabsPage', component: TabsPage, tabComponent: Page2, index: 1, icon: 'contacts' },
    { title: 'Home', name: 'TabsPage', component: TabsPage, tabComponent: HomePage, index: 2, icon: 'map' },
  ];
  // tslint:disable-next-line:no-empty
  constructor() { }

  public getMenuNavigationPage(): Array<PageInterface> {
    return this.pages;
  }

}
