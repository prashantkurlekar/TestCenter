import { NgModule } from '@angular/core';
import { TestPage, TestsPage } from './';
import { IonicModule } from 'ionic-angular';

const pages = [
  TestPage, TestsPage,
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
