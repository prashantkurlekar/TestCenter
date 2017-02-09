import { NgModule } from '@angular/core';
import {
  ManageAnswerComponent
} from './';
import { IonicModule } from 'ionic-angular';

const components = [
  ManageAnswerComponent,
];

@NgModule({
  declarations: components,
  imports: [
    IonicModule,
  ],
  exports: components,
  entryComponents: components,
})
export class ComponentsModule { }
