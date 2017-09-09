import { TestBed, inject } from '@angular/core/testing';
import { AssessmentService } from './assessment.service';
import { TestCenterData } from '../../providers/testcenter-data';
import { Http, BaseRequestOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

describe('AssessmentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AssessmentService, TestCenterData,
        MockBackend, BaseRequestOptions,
        {
          provide: Http, useFactory: (mockBackend: MockBackend, options: BaseRequestOptions) => {
            return new Http(mockBackend, options);
          }, deps: [MockBackend, BaseRequestOptions],
        },
      ],
    });
  });

  it('should be created', inject([AssessmentService], (service: AssessmentService) => {
    expect(service).toBeTruthy();
  }));

  it('should get assessments', inject([AssessmentService], (service: AssessmentService) => {
    spyOn(service, 'getAssessments').and.returnValue([{}, {}]);

    const assessments = service.getAssessments();

    expect(assessments).toBeDefined();
  }));

});
