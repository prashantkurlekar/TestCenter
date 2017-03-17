import { NavController, LoadingController, AlertController, Loading } from 'ionic-angular';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthData } from '../../providers/auth-data';
import { SignupPage } from '../signup/signup';
import { HomePage } from '../home/home';
import { ResetPasswordPage } from '../reset-password/reset-password';
import { AuthDataService } from '../../services/auth-data/auth-data.service';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public loginForm;
  public loading: Loading;

  constructor(public navController: NavController, public authData: AuthDataService,
    public formBuilder: FormBuilder, public alertController: AlertController,
    public loadingController: LoadingController) {
    this.buildForm();
  }

  private buildForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.minLength(6),
      Validators.required])]
    });
  }

  public loginUser(): void {
    if (!this.loginForm.valid) {
      console.log(this.loginForm.value);
    } else {
      this.authData.loginUser(this.loginForm.value.email, this.loginForm.value.password).then(authData => {
        this.loading.dismiss().then(() => {
          this.navController.setRoot(TabsPage);
        });
      }, error => {
        this.loading.dismiss().then(() => {
          const alert = this.alertController.create({
            message: error.message,
            buttons: [
              {
                text: 'Ok',
                role: 'cancel'
              }
            ]
          });
          alert.present();
        });
      });
      this.loading = this.loadingController.create();
      this.loading.present();
    }
  }

  public goToSignup(): void {
    this.navController.push(SignupPage);
  }

  public goToResetPassword(): void {
    this.navController.push(ResetPasswordPage);
  }
}
