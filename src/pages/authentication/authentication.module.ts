import { NgModule } from '@angular/core';
import { LoginPage, SignupPage, ResetPasswordPage } from './';
import { IonicModule } from 'ionic-angular';

const pages: any = [
  LoginPage, ResetPasswordPage, SignupPage,
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
export class AuthenticationModule { ; }
