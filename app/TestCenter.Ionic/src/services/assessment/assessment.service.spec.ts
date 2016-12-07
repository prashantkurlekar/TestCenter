/* tslint:disable:no-unused-variable */
/* tslint:disable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AssessmentService } from './assessment.service';
import { LoggerService } from '../logger/logger.service';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions, Http, Response, ResponseOptions } from '@angular/http';
import { NavController, AlertController, App, Config, Platform } from 'ionic-angular';

describe('Service: Assessment', () => {

  let assessmentServiceStub: any;

  beforeEach(() => {

    assessmentServiceStub = {
      getTop: { name: 'Test User' },
    };

    TestBed.configureTestingModule({
      providers: [
        AssessmentService,
        App, Config, Platform, MockBackend, BaseRequestOptions,
        {
          provide: Http,
          deps: [MockBackend, BaseRequestOptions], 
          useFactory: (mockBackend: MockBackend, options: BaseRequestOptions) => {
            return new Http(mockBackend, options);
          },
        }, NavController, LoggerService, AlertController,
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

/* tslint:enable */
