import { NgModule } from '@angular/core';
import { TestsPage } from './tests';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [TestsPage],
  imports: [IonicPageModule.forChild(TestsPage)],
})
export class TestsPageModule { }
