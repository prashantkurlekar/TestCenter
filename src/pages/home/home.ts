import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthenticationService } from '../../services';
import { LoginPage } from '../authentication';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public authData: AuthenticationService) { ; }

  public logOut(): void {
    this.authData.logoutUser().then(() => {
      this.navCtrl.setRoot(LoginPage);
    });
  }

}
