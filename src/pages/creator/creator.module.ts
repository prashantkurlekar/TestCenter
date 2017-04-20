import { NgModule } from '@angular/core';
import { TestPage, TestsPage } from './';
import { IonicModule } from 'ionic-angular';
import { CategoriesPage } from './categories/categories';

const pages: any = [
  TestPage, TestsPage, CategoriesPage,
];

@NgModule({
  declarations: pages,
  imports: [
    IonicModule,
  ],
  exports: [],
  entryComponents: pages,
  providers: [],
})
export class CreatorModule { ; }
