import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

import { Configuration } from '../configuration';
import { LoggerService } from '../logger/logger.service';

@Injectable()
export class TestService {
  constructor(public http: Http) { }

  public getTopTests(): Promise<any> {
    return this.http.get(`${Configuration.topTests}`).toPromise()
      .then(response => {
        return response.json();
      })
      .catch(error => {
        LoggerService.error(error);
      });
  }
}
