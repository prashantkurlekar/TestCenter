import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { LoggerService } from '../services/logger/logger.service';

@Injectable()
export class TestCenterData {
  data: any;

  constructor(public http: Http, public loggerService: LoggerService) { }

  private load(): Promise<any> {
    if (this.data) {
      return new Promise(resolve => { resolve(this.data); });
    } else {
      return this.http.get('assets/data/data.json').toPromise()
        .then(data => {
          return data.json();
        });
    }
  }

  public getTests(): Promise<any> {
    return this.load().then(data => {
      return data.tests;
    });
  }

}
