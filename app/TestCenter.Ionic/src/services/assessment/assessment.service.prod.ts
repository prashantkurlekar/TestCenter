import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';
import { AssessmentService } from './assessment.service';

import { LoggerService } from '../logger/logger.service';

@Injectable()
export class AssessmentServiceProd extends AssessmentService {
  constructor(public http: Http, public loggerService: LoggerService) { 
    super(http, loggerService);
  }

  public getTop(): Promise<any> {
    return this.http.get('http://localhost:5000/api/assessment/top').toPromise()
      .then(response => {
        this.loggerService.debug(response.json());
        return response.json();
      })
      .catch(error => {
        this.loggerService.error(error);
      });
  }
}
