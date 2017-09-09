import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResponsiveAppleProductsPage } from './responsive-apple-products';

@NgModule({
  declarations: [
    ResponsiveAppleProductsPage,
  ],
  imports: [
    IonicPageModule.forChild(ResponsiveAppleProductsPage),
  ],
})
export class ResponsiveAppleProductsPageModule {}
