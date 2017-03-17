import { TestBed, inject } from '@angular/core/testing';

import { AuthDataService } from './auth-data.service';

describe('AuthDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthDataService]
    });
  });

  it('should ...', inject([AuthDataService], (service: AuthDataService) => {
    expect(service).toBeTruthy();
  }));
});
