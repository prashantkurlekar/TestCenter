import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResponsiveCardListPage } from './responsive-card-list';

@NgModule({
  declarations: [
    ResponsiveCardListPage,
  ],
  imports: [
    IonicPageModule.forChild(ResponsiveCardListPage),
  ],
})
export class ResponsiveCardListPageModule {}
