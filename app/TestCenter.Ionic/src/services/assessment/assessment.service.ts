import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

import { LoggerService } from '../logger/logger.service';

@Injectable()
export class AssessmentService {
  constructor(private http: Http, private loggerService: LoggerService) { }

  public getTop(): Promise<any> {
    return this.http.get('http://localhost:5000/api/assessment').toPromise()
      .then(response => {
        this.loggerService.debug(response.json());
        return response.json();
      })
      .catch(error => {
        this.loggerService.error(error);
      });
  }
}
