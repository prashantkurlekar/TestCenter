/* tslint:disable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AssessmentService } from './assessment.service';
import { AssessmentServiceMock } from './assessment.service.mock';
import { LoggerService } from '../logger/logger.service';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions, Http, Response, ResponseOptions } from '@angular/http';
import { NavController, AlertController, App, Config, Platform } from 'ionic-angular';
import { TestCenterData } from '../../mock-data/testcenter-data';

describe('Service: Assessment', () => {

  let assessmentServiceStub: any;

  beforeEach(() => {

    assessmentServiceStub = {
      getTop: { name: 'Test User' },
    };

    TestBed.configureTestingModule({
      providers: [
        TestCenterData, NavController, LoggerService, AlertController,
        App, Config, Platform, MockBackend, BaseRequestOptions,
        {
          provide: Http,
          deps: [MockBackend, BaseRequestOptions], 
          useFactory: (mockBackend: MockBackend, options: BaseRequestOptions) => {
            return new Http(mockBackend, options);
          },
        }, { provide: AssessmentService, useClass: AssessmentServiceMock }
      ],
    });

    spyOn(console, 'log').and.stub();
    spyOn(console, 'debug').and.stub();

  });

  it('should initialize', inject([AssessmentService], (service: AssessmentService) => {
    expect(service).toBeTruthy();
  }));

  it('should return assessments', async(inject([AssessmentService, MockBackend],
    (service: AssessmentService, backend: MockBackend) => {
      service.getAssessments().then(assessments => {
        expect(assessments.length).toBeGreaterThan(0);
      })
    }))
  );

  it('should return assessment with questions', async(inject([AssessmentService, MockBackend],
    (service: AssessmentService, backend: MockBackend) => {
      service.getAssessments().then(assessments => {
        expect(assessments.length).toBeGreaterThan(0);
      })
    }))
  );
});

/* tslint:enable */
