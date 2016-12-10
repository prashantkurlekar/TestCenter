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
  }

  public getTests(): Promise<any> {
    return this.testCenterData.getTests();
  }
}
