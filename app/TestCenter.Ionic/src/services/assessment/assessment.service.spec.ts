/* tslint:disable:no-unused-variable */
/* tslint:disable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AssessmentService } from './assessment.service';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions, Http, Response, ResponseOptions } from '@angular/http';
import { SafeHttp, NetworkService } from '../safe-http/safe-http';
import { NavController } from 'ionic-angular';

describe('Service: Test', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AssessmentService,
        MockBackend, BaseRequestOptions,
        {
          provide: Http, useFactory: (mockBackend: MockBackend, options: BaseRequestOptions) => {
            return new Http(mockBackend, options);
          }, deps: [MockBackend, BaseRequestOptions],
        }, SafeHttp, NetworkService, NavController,
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
