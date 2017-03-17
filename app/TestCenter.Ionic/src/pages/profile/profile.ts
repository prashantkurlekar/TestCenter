import { NavController, Alert, AlertController } from 'ionic-angular';
import { Component } from '@angular/core';
import { ProfileData } from '../../providers/profile-data/profile-data';
import { AuthData } from '../../providers/auth-data/auth-data';
import { LoginPage } from '../login/login';
import { ProfileDataService } from '../../services/profile-data/profile-data.service';
import { AuthDataService } from '../../services/auth-data/auth-data.service';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  public userProfile: any;
  public birthDate: string;

  constructor(public nav: NavController, public profileDataService: ProfileDataService,
    public authData: AuthDataService, public alertCtrl: AlertController) {
    this.nav = nav;
    this.profileDataService = profileDataService;

    this.profileDataService.getUserProfile().on('value', (data) => {
      this.userProfile = data.val();
      this.birthDate = this.userProfile.birthDate;
    });

  }

  updateName(): void {
    let alert = this.alertCtrl.create({
      message: 'Your first name & last name',
      inputs: [
        {
          name: 'firstName',
          placeholder: 'Your first name',
          value: this.userProfile.firstName
        }, {
          name: 'lastName',
          placeholder: 'Your last name',
          value: this.userProfile.lastName
        },
      ],
      buttons: [
        {
          text: 'Cancel',
        }, {
          text: 'Save',
          handler: data => {
            this.profileDataService.updateName(data.firstName, data.lastName);
          }
        }
      ]
    });
    alert.present();
  }

  updateDOB(birthDate): void {
    this.profileDataService.updateDOB(birthDate);
  }

  updateEmail(): void {
    let alert = this.alertCtrl.create({
      inputs: [
        {
          name: 'newEmail',
          placeholder: 'Your new email',
        },
      ],
      buttons: [
        {
          text: 'Cancel',
        }, {
          text: 'Save',
          handler: data => {
            this.profileDataService.updateEmail(data.newEmail, data.password);
          }
        }
      ]
    });
    alert.present();
  }

  updatePassword() {
    let alert = this.alertCtrl.create({
      inputs: [
        {
          name: 'newPassword',
          placeholder: 'Your new password',
          type: 'password'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
        }, {
          text: 'Save',
          handler: data => {
            this.profileDataService.updatePassword(data.newEmail, data.newPassword);
          }
        }
      ]
    });
    alert.present();
  }
}
