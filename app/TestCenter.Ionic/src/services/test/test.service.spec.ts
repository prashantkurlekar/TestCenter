/* tslint:disable:no-unused-variable */
/* tslint:disable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TestService } from './test.service';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions, Http, Response, ResponseOptions } from '@angular/http';
import { SafeHttp, NetworkService } from '../safe-http/safe-http';
import { NavController } from 'ionic-angular';

describe('Service: Test', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TestService,
        MockBackend, BaseRequestOptions,
        {
          provide: Http, useFactory: (mockBackend: MockBackend, options: BaseRequestOptions) => {
            return new Http(mockBackend, options);
          }, deps: [MockBackend, BaseRequestOptions],
        }, SafeHttp, NetworkService, NavController,
      ],
    });
  });

  it('should initialize', inject([TestService], (service: TestService) => {
    expect(service).toBeTruthy();
  }));

  it('should return top rated tests', async(inject([TestService, MockBackend],
    (service: TestService, backend: MockBackend) => {
      expect(service).toBeTruthy();
    }))
  );

});
