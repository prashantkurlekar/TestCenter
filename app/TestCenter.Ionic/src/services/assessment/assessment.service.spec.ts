import { TestBed, inject } from '@angular/core/testing';
import { AssessmentService } from './assessment.service';

describe('Services: AssessmentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AssessmentService]
    });
  });

  it('should initialize',
    inject([AssessmentService], (service: AssessmentService) => {
      expect(service).toBeTruthy();
    })
  );

  // it('should return the current ');
});
