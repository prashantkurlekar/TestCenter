import {
  NavController,
  LoadingController,
  AlertController
} from 'ionic-angular';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthData } from '../../providers/auth-data';
import { CustomValidators } from 'ng2-validation';
import { AuthDataService } from '../../services/auth-data/auth-data.service';

@Component({
  selector: 'page-reset-password',
  templateUrl: 'reset-password.html',
})
export class ResetPasswordPage {
  public resetPasswordForm;


  constructor(public authData: AuthDataService, public formBuilder: FormBuilder,
    public nav: NavController, public loadingCtrl: LoadingController,
    public alertCtrl: AlertController) {

    this.resetPasswordForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required, CustomValidators.email])],
    });
  }

  public resetPassword() {
    if (!this.resetPasswordForm.valid) {
      console.log(this.resetPasswordForm.value);
    } else {
      this.authData.resetPassword(this.resetPasswordForm.value.email).then((user) => {
        const alert = this.alertCtrl.create({
          message: 'We just sent you a reset link to your email',
          buttons: [
            {
              text: 'Ok',
              role: 'cancel',
              handler: () => {
                this.nav.pop();
              }
            }
          ]
        });
        alert.present();

      }, (error) => {
        const errorMessage: string = error.message;
        const errorAlert = this.alertCtrl.create({
          message: errorMessage,
          buttons: [
            {
              text: 'Ok',
              role: 'cancel'
            }
          ]
        });
        errorAlert.present();
      });
    }
  }
}
