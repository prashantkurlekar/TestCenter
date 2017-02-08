import { Logger, SafeHttp } from './../../providers';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';

@Injectable()
export class AssessmentServiceMock {
  constructor(public http: SafeHttp, public logger: Logger) { }

  public createAssessment(assessment: any): Promise<any> {
    this.logger.log(`AssessmentServiceMock.createAssessment`);
    return new Promise(resolve => {
      return resolve();
    });
  }

}
