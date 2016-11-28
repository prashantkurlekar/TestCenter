import { Injectable } from '@angular/core';
import { Platform, AlertController } from 'ionic-angular';
import { GoogleAnalytics } from 'ionic-native';
import 'rxjs/add/operator/map';

@Injectable()
export class LoggerService {

  constructor(public alertController?: AlertController) { }

  public log(message: any): void {
    console.log(message);
  }

  public error(message: any): void {
    console.error(message);
    // this.showMessage(message);
  }

  public info(message: any): void {
    console.info(message);
  }

  public warn(message: any): void {
    console.warn(message);
  }

  public debug(message: any): void {
    console.debug(message);
  }

  public trackView(platform: Platform, title: string): void {
    platform.ready().then(() => {
      GoogleAnalytics.trackView(title);
    });
  }

  public trackEvent(platform: Platform, category: any, action: any, label: any, value: any): void {
    platform.ready().then(() => {
      GoogleAnalytics.trackEvent(category, action, label, value);
    });
  }

  public showMessage(message): void {
    let messageAlert: any = this.alertController.create({
      title: 'Test Center',
      subTitle: message,
      buttons: [
        {
          text: 'Ok',
        },
      ],
    });
    messageAlert.present();
  }

}
