import { AlertController } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { Network, Diagnostic } from 'ionic-native';

@Injectable()
export class NetworkService {

  public networkAlert: any;

  constructor(public alertController: AlertController) { }

  public noConnection(): any {
    console.debug(Network.type);
    return (Network.type === 'none');
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
    if (Diagnostic.switchToWifiSettings)
      Diagnostic.switchToWifiSettings();
    else
      Diagnostic.switchToSettings();
  }

}
