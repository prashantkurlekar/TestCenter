import { NgModule } from '@angular/core';
import { CategoriesPage } from './categories';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [CategoriesPage],
  imports: [IonicPageModule.forChild(CategoriesPage)],
})
export class CategoriesPageModule { }
