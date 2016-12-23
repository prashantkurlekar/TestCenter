import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { LoggerService } from '../services/logger/logger.service';
import * as _ from 'lodash';

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
      return data.assessments;
    });
  }

  public getTest(id): Promise<any> {
    return this.load().then(data => {
      return _.filter(data.assessments, { id: id })[0];
    });
  }

}
