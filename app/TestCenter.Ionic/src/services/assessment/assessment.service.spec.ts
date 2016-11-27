/* tslint:disable:no-unused-variable */
/* tslint:disable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AssessmentService } from './assessment.service';
import { LoggerService } from '../logger/logger.service';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions, Http, Response, ResponseOptions } from '@angular/http';
import { SafeHttp, NetworkService } from '../safe-http/safe-http';
import { NavController, AlertController } from 'ionic-angular';

describe('Service: Assessment', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AssessmentService,
        MockBackend, BaseRequestOptions,
        {
          provide: SafeHttp, useFactory: (mockBackend: MockBackend, options: BaseRequestOptions) => {
            return new Http(mockBackend, options);
          }, deps: [MockBackend, BaseRequestOptions],
        }, NetworkService, NavController, LoggerService, AlertController,
      ],
    });
  });

  it('should initialize', inject([AssessmentService], (service: AssessmentService) => {
    expect(service).toBeTruthy();
  }));

  it('should return top rated tests', async(inject([AssessmentService, MockBackend],
    (service: AssessmentService, backend: MockBackend) => {
      expect(service).toBeTruthy();
    }))
  );

});
