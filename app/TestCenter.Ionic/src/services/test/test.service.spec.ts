/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TestService } from './test.service';

describe('Service: Test', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestService]
    });
  });

  it('should have defined', inject([TestService], (service: TestService) => {
    expect(service).toBeTruthy();
  }));

  // it('should return top tests order by number of attempts', );
});
