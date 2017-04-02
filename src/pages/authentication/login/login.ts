import { Component } from '@angular/core';
import { NavController, NavParams, Loading, LoadingController, AlertController, Alert } from 'ionic-angular';
import { Logger } from '../../../providers';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../../../services';
import { SignupPage, ResetPasswordPage } from '../';
import { TabsPage } from '../../tabs/tabs';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public title: string = 'Login';
  public loginForm: FormGroup;
  public loading: Loading;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public formBuilder: FormBuilder, public loadingController: LoadingController,
    public alertController: AlertController,
    public logger: Logger, public authData: AuthenticationService) {
    this.logger.log(`LoginPage.constructor`);
    this.buildForm();
  }

  public ionViewDidLoad(): void {
    this.logger.log(`LoginPage.ionViewDidLoad`);
  }

  private buildForm(): void {
    this.loginForm = this.formBuilder.group({
      email: ['',
        Validators.compose([Validators.required]),
      ],
      password: ['',
        Validators.compose([Validators.minLength(6), Validators.required]),
      ],
    });
  }

  public onLogin(): void {
    if (!this.loginForm.valid) {
      console.log(this.loginForm.value);
    } else {
      this.authData.login(this.loginForm.value.email, this.loginForm.value.password)
        // tslint:disable-next-line:no-unused-variable
        .then((authData) => {
          this.loading.dismiss().then(() => {
            // TODO: Navigate to HomePage
            // this.logger.info(`successful`);
            this.navCtrl.setRoot(TabsPage);
          });
          // tslint:disable-next-line:align
        }, (error) => {
          this.loading.dismiss().then(() => {
            this.showAlert(error);
          });
        });

      this.showLoading();
    }
  }

  public showAlert(error: any): void {
    let alert: Alert = this.alertController.create({
      title: this.title,
      message: error.message,
      buttons: [
        {
          text: 'Ok',
          role: 'cancel',
        },
      ],
    });
    alert.present();
  }

  public showLoading(): void {
    this.loading = this.loadingController.create();
    this.loading.present();
  }

  public onSignup(): void {
    this.navCtrl.push(SignupPage);
  }

  public onResetPassword(): void {
    this.navCtrl.push(ResetPasswordPage);
  }

}
