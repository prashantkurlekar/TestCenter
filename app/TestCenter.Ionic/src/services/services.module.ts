import { NgModule } from '@angular/core';
import { Http } from '@angular/http';
import { SafeHttp, NetworkService, AssessmentService, LoggerService, StorageService } from './';
import { AssessmentServiceProd } from './assessment/assessment.service.prod';
import { AssessmentServiceMock } from './assessment/assessment.service.mock';
import { TestCenterData } from '../mock-data/testcenter-data';
import { AppConfig } from '../app/app.config';

@NgModule({
  declarations: [],
  imports: [],
  exports: [],
  entryComponents: [],
  providers: [
    SafeHttp, NetworkService,
    {
      provide: AssessmentService, 
      deps: [ Http, LoggerService, TestCenterData ],
      useFactory: (http: Http, loggerService: LoggerService, testCenterData: TestCenterData) => {
        return AppConfig.production ? new AssessmentServiceProd(http, loggerService) : new AssessmentServiceMock(http, loggerService, testCenterData);
      },
    },
    LoggerService, StorageService,
  ],
})
export class ServicesModule { }
