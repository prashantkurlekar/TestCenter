import { TestBed, inject } from '@angular/core/testing';

import { FirebaseBackend } from './firebase-backend';

describe('FirebaseBackendService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FirebaseBackend]
    });
  });

  it('should initialize', inject([FirebaseBackend], (service: FirebaseBackend) => {
    expect(service).toBeTruthy();
  }));
});
