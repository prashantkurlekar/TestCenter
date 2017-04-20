import { Component } from '@angular/core';
// import { AboutPage } from '../about/about';
// import { TestsPage } from '../creator';
// import { CategoriesPage } from '../creator/categories/categories';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  templateUrl: 'tabs.html',
})
export class TabsPage {

  public tab1Root: any = 'TestsPage';
  public tab2Root: any = 'CategoriesPage';
  public tab3Root: any = 'QuestionsPage';

  constructor() { ; }

}
