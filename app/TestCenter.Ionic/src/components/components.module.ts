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
  entryComponents: components,
})
export class ComponentsModule { }
