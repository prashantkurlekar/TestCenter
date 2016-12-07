import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';
import { AssessmentService } from './assessment.service';

import { LoggerService } from '../logger/logger.service';

@Injectable()
export class AssessmentServiceMock extends AssessmentService {
  constructor(public http: Http, public loggerService: LoggerService) { 
    super(http, loggerService);
  }

  public getTop(): Promise<any> {
    return new Promise(resolve => {
      resolve([
        { id: 1, name: 'test 1', description: 'description 1', labels: ['label 1-1', 'label 1-2'] },
        { id: 2, name: 'test 2', description: 'description 2', labels: ['label 2-1', 'label 2-2'] },
        { id: 3, name: 'test 3', description: 'description 3', labels: ['label 3-1', 'label 3-2'] },
      ]);
    });
  }
}
