import { Injectable } from '@angular/core';
import 'rxjs';
import { SafeHttp } from '../safe-http/safe-http';
import { LoggerService } from '../logger/logger.service';

@Injectable()
export class AssessmentService {
  constructor(private http: SafeHttp) { }

  public getAssessments(): Promise<any> {
    return this.http.get('http://localhost:5000/api/assessment').toPromise()
      .then(response => {
        LoggerService.debug(response.json());
        return response.json();
      })
      .catch(error => {
        LoggerService.error(error);
      });
  }
}
