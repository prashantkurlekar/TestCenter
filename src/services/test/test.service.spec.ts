import { TestBed, inject } from '@angular/core/testing';
import { TestService } from './test.service';

describe('Services.TestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestService],
    });
  });

  it('should be created',
    inject([TestService], (service: TestService) => {
      expect(service).toBeTruthy();
    }),
  );

  // it('should return tests',
  //   inject([TestService], (service: TestService) => {
  //     // expect(service).toBeTruthy();
  //     // expect(service.getTests).toBe();
  //   }),
  // );
});
