import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { TestPage } from '../creator';

@Component({
  templateUrl: 'tabs.html',
})
export class TabsPage {

  public tab1Root: any = HomePage;
  public tab2Root: any = AboutPage;
  public tab3Root: any = ContactPage;
  public tab4Root: any = TestPage;

  constructor() { ; }
}