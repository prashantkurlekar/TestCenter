import { Assessment } from './../../models/assessment';
import { Logger, SafeHttp, Utils } from './../../providers';
import { AppConfig } from './../../app/app.config';
import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';

@Injectable()
export class AssessmentService {
  private ASSESSMENT_KEY: string = 'ASSESSMENT';
  constructor(public http: SafeHttp, public logger: Logger, public storage: Storage) { }

  public getAssessment(assessmentId: string): Promise<any> {
    return this.storage.get(this.ASSESSMENT_KEY);
  }

  public createAssessment(assessment: Assessment): Promise<any> {
    this.logger.log(`AssessmentService.createAssessment`);
    this.logger.debug(assessment);
    const isTrue = true;
    if (isTrue) {
      this.storage.set(this.ASSESSMENT_KEY, assessment);
      console.info(assessment);
      assessment.id = Utils.newGuid();
      return Promise.resolve(assessment);
      // return new Promise(resolve => { resolve(assessment) });
    } else {
      return this.http.post(AppConfig.apiAssessment, JSON.stringify({ assessment: assessment }), Utils.requestOptions).toPromise()
        .then(response => {
          return response;
        })
        .catch(() => this.logger.handleError);
    }
  }

  public updateAssessment(assessment: any): Promise<any> {
    return this.storage.set(this.ASSESSMENT_KEY, assessment);
  }

  public deleteAssessment(): Promise<any> {
    return this.storage.remove(this.ASSESSMENT_KEY);
  }

}
