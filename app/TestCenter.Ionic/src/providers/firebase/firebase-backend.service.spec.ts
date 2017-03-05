import { TestBed, inject } from '@angular/core/testing';
import { FirebaseBackendService } from './firebase-backend.service';

describe('Providers: FirebaseBackendService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FirebaseBackendService]
    });
  });

  it('should initialize',
    inject([FirebaseBackendService], (service: FirebaseBackendService) => {
      expect(service).toBeTruthy();
    })
  );

});
