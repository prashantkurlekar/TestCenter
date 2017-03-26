import { NavController, LoadingController, AlertController, Alert } from 'ionic-angular';
import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthenticationService } from '../../../services';

@Component({
  selector: 'page-reset-password',
  templateUrl: 'reset-password.html',
})
export class ResetPasswordPage {

  public title: string = 'Reset Password';
  public resetPasswordForm: FormGroup;

  constructor(public authData: AuthenticationService, public formBuilder: FormBuilder,
    public navCtrl: NavController, public loadingCtrl: LoadingController, public alertCtrl: AlertController) {
    this.buildForm();
  }

  public buildForm(): void {
    this.resetPasswordForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required])],
    });
  }

  public resetPassword(): void {
    if (!this.resetPasswordForm.valid) {
      console.log(this.resetPasswordForm.value);
    } else {
      // tslint:disable-next-line:no-unused-variable
      this.authData.resetPassword(this.resetPasswordForm.value.email).then((user) => {
        let alert: Alert = this.alertCtrl.create({
          title: this.title,
          message: 'We just sent you a reset link to your email',
          buttons: [
            {
              text: 'Ok',
              role: 'cancel',
              handler: () => {
                this.navCtrl.pop();
              },
            },
          ],
        });
        alert.present();
        // tslint:disable-next-line:align
      }, (error) => {
        let errorMessage: string = error.message;
        let errorAlert: Alert = this.alertCtrl.create({
          title: this.title,
          message: errorMessage,
          buttons: [
            {
              text: 'Ok',
              role: 'cancel',
            },
          ],
        });
        errorAlert.present();
      });
    }
  }
}
