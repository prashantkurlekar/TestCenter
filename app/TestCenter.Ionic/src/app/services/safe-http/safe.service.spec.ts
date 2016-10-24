/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SafeHttp } from './safe-http';

describe('Service: SafeHttp', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SafeHttp]
    });
  });

  it('should initialize', inject([SafeHttp], (service: SafeHttp) => {
    expect(service).toBeTruthy();
  }));
});
