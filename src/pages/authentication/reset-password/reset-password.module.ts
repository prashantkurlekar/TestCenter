import { NgModule } from '@angular/core';
import { ResetPasswordPage } from './reset-password';
import { IonicPageModule } from 'ionic-angular';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@NgModule({
  declarations: [ResetPasswordPage],
  imports: [IonicPageModule.forChild(ResetPasswordPage)],
})
export class ResetPasswordPageModule { }
