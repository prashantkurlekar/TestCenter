import { Assessment } from './../../models/assessment';
import { mockAssessment, spyOnConsole, StorageMock } from './../../mocks';
import { Logger } from './../../providers/logger';
import { SafeHttp } from './../../providers/safe-http';
import { AssessmentService } from './assessment.service';
import { TestBed, inject, async } from '@angular/core/testing';
import { BaseRequestOptions, Http } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { Storage } from '@ionic/storage';

describe('Service: AssessmentService', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        AssessmentService, Logger,
        MockBackend, BaseRequestOptions,
        {
          provide: SafeHttp, useFactory: (mockBackend: MockBackend, options: BaseRequestOptions) => {
            return new Http(mockBackend, options);
          }, deps: [MockBackend, BaseRequestOptions]
        },
        { provide: Storage, useClass: StorageMock },
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    spyOnConsole();
  });

  it('should initialize service',
    async(inject([AssessmentService], (service: AssessmentService) => {
      expect(service).toBeTruthy();
    }))
  );

  it('should call api and create assessment',
    async(inject([AssessmentService], (service: AssessmentService) => {
      const assessment: Assessment = mockAssessment;
      service.createAssessment(assessment).then(result => {
        expect(result).toBeDefined();
      });
    }))
  );

});
