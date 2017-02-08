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

  public error(error: any): void {
    console.error(error);
    if (!error.ok) {
      this.handleNetworkError(error);
    }
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

  public showMessage(message: any): void {
    this.alertController.create({
      title: 'Test Center',
      subTitle: message,
      buttons: [
        {
          text: 'Ok',
        },
      ],
    }).present();
  }

  private handleNetworkError(error: any): void {
    switch (error.status) {
      case 0:
        console.error('Not reachable.');
        break;
      case 401:
        console.error('Unauthorized');
        break;
      case 402:
        console.error('Payment required');
        // TODO: check wikipedia, will be useful to handle google api limit reached event
        break;
      case 403:
        console.error('Forbidden');
        break;
      case 404:
        console.error('Not Found');
        break;
      case 405:
        console.error('Method Not Allowed');
        break;
      default:
        break;
    }
  }

}
