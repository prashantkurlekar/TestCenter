import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { TestsPage } from '../creator';

@Component({
  templateUrl: 'tabs.html',
})
export class TabsPage {

  public tab1Root: any = TestsPage;
  public tab2Root: any = HomePage;
  public tab3Root: any = AboutPage;

  constructor() { ; }

}
