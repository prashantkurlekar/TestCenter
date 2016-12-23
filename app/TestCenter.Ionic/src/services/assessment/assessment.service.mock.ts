import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

import { AssessmentService } from './assessment.service';
import { LoggerService } from '../logger/logger.service';
import { TestCenterData } from '../../mock-data/testcenter-data';

@Injectable()
export class AssessmentServiceMock extends AssessmentService {
  constructor(public http: Http, public loggerService: LoggerService,
    public testCenterData: TestCenterData) {
    super(http, loggerService);
    this.loggerService.log(`AssessmentServiceMock.constructor`);
  }

  public getAssessments(): Promise<any> {
    this.loggerService.log(`AssessmentServiceMock.getAssessments`);
    return this.testCenterData.getTests();
  }

  public getAssessment(id): Promise<any> {
    this.loggerService.log(`AssessmentServiceMock.getAssessment: ${id}`);
    return this.testCenterData.getTest(id);
  }
}
