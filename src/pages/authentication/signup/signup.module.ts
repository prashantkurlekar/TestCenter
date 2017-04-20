import { NgModule } from '@angular/core';
import { SignupPage } from './signup';
import { IonicPageModule, IonicPage } from 'ionic-angular';

@IonicPage()
@NgModule({
  declarations: [SignupPage],
  imports: [IonicPageModule.forChild(SignupPage)],
})
export class SignupPageModule { }
