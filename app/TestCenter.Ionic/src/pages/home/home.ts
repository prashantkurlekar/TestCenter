import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { AuthDataService } from '../../services/auth-data/auth-data.service';
import { LoginPage } from '../login/login';
import { ProfilePage } from '../profile/profile';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navController: NavController, public authDataService: AuthDataService) {
    console.log(`something`);
  }

  public logOut() {
    this.authDataService.logoutUser().then(() => {
      this.navController.setRoot(LoginPage);
    });
  }

  public goToProfile(): void {
    this.navController.push(ProfilePage);
  }
}
