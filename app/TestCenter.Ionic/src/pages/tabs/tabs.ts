import { Component } from '@angular/core';

import { PublicHomePage } from '../public/home/home';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';

@Component({
  templateUrl: './tabs.html',
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  public tab1Root: any = PublicHomePage;
  public tab2Root: any = ContactPage;
  public tab3Root: any = AboutPage;

  constructor() { ; }
}
