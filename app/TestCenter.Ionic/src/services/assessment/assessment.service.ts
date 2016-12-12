import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

import { LoggerService } from '../logger/logger.service';

@Injectable()
export class AssessmentService {
  constructor(public http: Http, public loggerService: LoggerService) { }

  public getAssessments(): Promise<any> {
    this.loggerService.log(`AssessmentService.getAssessments`);
    return this.http.get('http://localhost:5000/api/assessment/top').toPromise()
      .then(response => {
        return response.json();
      })
      .catch(error => {
        this.loggerService.error(error);
      });
  }

  public getAssessment(id): Promise<any> {
    this.loggerService.log(`AssessmentService.getAssessment id: ${id}`);
    return this.http.get(`http://localhost:5000/api/assessment/${id}`).toPromise()
      .then(response => {
        this.loggerService.debug(response.json());
        return response.json();
      })
      .catch(error => {
        this.loggerService.error(error);
      });
  }
}
