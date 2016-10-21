import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';

@Component({
  templateUrl: 'tabs.html',
})
export class TabsPage {
  public tab1Root: any = HomePage;
  public tab2Root: any = AboutPage;
  public tab3Root: any = ContactPage;

  constructor() { ; }
}
