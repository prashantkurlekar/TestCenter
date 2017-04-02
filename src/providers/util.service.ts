import { Injectable } from '@angular/core';
// import { Guid } from './guid';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
// import { Headers, RequestOptions } from '@angular/http';
import { Logger } from './logger/logger';

@Injectable()
export class UtilService {

  // tslint:disable-next-line
  constructor(private http: Http, private storage: Storage, public logger: Logger) { }
  
  // public static Guid(): any {
  //   return Guid.newGuid();
  // }

  // public reverseGeocode(latitude: any, longitude: any): Promise<any> {
  //   this.logger.log(`UtilService.reverseGeocode`);
  //   return this.http
  //     .get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyAjfVP8-FirlvFdqS6D6bYTGNOBeryyGKo`)
  //     .toPromise().then(response => {
  //       this.logger.debug(response.json());
  //       return response.json().results[0].formatted_address || response.json().results[0].address_components[0].long_name;
  //     })
  //     .catch((error: any) => {
  //       this.logger.error(error);
  //     });
  // }

  // public static formatDate(stringToFormat: any): string {
  //   let pad: any = s => { return (s < 10) ? '0' + s : s; };
  //   const d: Date = new Date(stringToFormat);
  //   return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join('/');
  // }

  // public static requestOptions(): RequestOptions {
  //   let headers: Headers = new Headers({ 'Content-Type': 'application/json' });
  //   return new RequestOptions({ headers: headers, withCredentials: true });
  // }

  public static onFormValueChanged(form: any, formErrors: any, validationMessages: any): void {
    if (!form) return;
    for (const field in formErrors) {
      formErrors[field] = '';
      const control: any = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages: any = validationMessages[field];
        for (const key in control.errors) {
          formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }
}
