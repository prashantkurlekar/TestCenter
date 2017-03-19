import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { Response, Http } from '@angular/http';
import { GoogleAnalytics } from 'ionic-native';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class Logger {

  constructor(public http: Http, public platform: Platform) { ; }

  public log(message: any): void {
    console.log(message);
  }

  public error(message: any): void {
    console.error(message);
  }

  public info(message: any): void {
    console.log(message);
  }

  public warn(message: any): void {
    console.warn(message);
  }

  public debug(message: any): void {
    console.debug(message);
  }

  public handleError(error: any): Promise<any> {
    // In a real world app, we might use a remote logging infrastructure
    // copied from https://angular.io/docs/ts/latest/guide/server-communication.html
    const errorMessage: string = error instanceof Response ? `${error.status} - ${error.statusText || ''}` : error.message ? error.message : error.toString();
    // TODO: Add logic to log error to server
    this.logErrorToServer(errorMessage);
    return Promise.reject(error.message || error);
  }

  private logErrorToServer(errorMessage: any): void {
    // this.http.post(`${ConfigurationService.logErrorUrl}/`, { error: errorMessage })
    //   .catch((error: any): Observable<any> => {
    //     // TODO: Log error locally, to sync those after server is available
    //     return Observable.throw(error);
    //   });
  }

  public trackView(pageTitle: string): void {
    this.platform.ready().then(() => {
      GoogleAnalytics.trackView(pageTitle);
    });
  }

  public trackEvent(platform: Platform, category: any, action: any, label: any, value: any): void {
    platform.ready().then(() => {
      GoogleAnalytics.trackEvent(category, action, label, value);
    });
  }

}
