import { AlertController } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { Network } from '@ionic-native/network';
import { Diagnostic } from '@ionic-native/diagnostic';

@Injectable()
export class NetworkService {

  public networkAlert: any;

  constructor(public alertController: AlertController, public network: Network, public diagnostic: Diagnostic) { ; }

  public noConnection(): any {
    console.debug(this.network.type);
    return (this.network.type === 'none');
  }

  public showNetworkAlert(): void {
    this.networkAlert = this.alertController.create({
      title: 'No internet connection',
      subTitle: 'Please check your internet connection.',
      buttons: [
        {
          text: 'Cancel',
          handler: () => { ; },
        }, {
          text: 'Open Settings',
          handler: () => {
            this.networkAlert.dismiss().then(() => {
              this.showSettings();
            });
          },
        },
      ],
    });
    this.networkAlert.present();
  }

  private showSettings(): void {
    if (this.diagnostic.switchToWifiSettings)
      this.diagnostic.switchToWifiSettings();
    else
      this.diagnostic.switchToSettings();
  }

}
