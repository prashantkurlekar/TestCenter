import { Component } from '@angular/core';
import { NavController, Loading, LoadingController, AlertController, Alert } from 'ionic-angular';
import { AuthenticationService } from '../../../services';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HomePage } from '../../home/home';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  public signupForm: FormGroup;
  public loading: Loading;

  constructor(public navCtrl: NavController, public authData: AuthenticationService,
    public formBuilder: FormBuilder, public loadingCtrl: LoadingController,
    public alertCtrl: AlertController) {
    this.buildForm();
  }

  public buildForm(): void {
    this.signupForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.minLength(6), Validators.required])],
    });
  }

  public signupUser(): void {
    if (!this.signupForm.valid) {
      console.log(this.signupForm.value);
    } else {
      this.authData.signup(this.signupForm.value.email, this.signupForm.value.password)
        .then(() => {
          this.loading.dismiss().then(() => {
            this.navCtrl.setRoot(HomePage);
          });
          // tslint:disable-next-line:align
        }, (error) => {
          this.loading.dismiss().then(() => {
            let alert: Alert = this.alertCtrl.create({
              message: error.message,
              buttons: [
                {
                  text: 'Ok',
                  role: 'cancel',
                },
              ],
            });
            alert.present();
          });
        });
      this.loading = this.loadingCtrl.create();
      this.loading.present();
    }
  }

}
