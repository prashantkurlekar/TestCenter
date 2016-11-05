import { Injectable } from '@angular/core';
import 'rxjs';
import { SafeHttp } from '../safe-http/safe-http';
import { LoggerService } from '../logger/logger.service';

@Injectable()
export class AssessmentService {
  constructor(private http: SafeHttp) { }

  public getAssessments(): Promise<any> {
    return this.http.get('http://localhost:5000/api/values').toPromise()
      .then(response => {
        return response.json();
      })
      .catch(error => {
        LoggerService.error(error);
      });
  }
}
