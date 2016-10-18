/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Http, XHRBackend, BaseRequestOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { TestService } from './test.service';


describe('Service: Test', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TestService,
        MockBackend, BaseRequestOptions,
        {
          provide: Http,
          deps: [MockBackend, BaseRequestOptions],
          useFactory: (backend: XHRBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backend, defaultOptions);
          },
        }
      ]
    });
  });

  it('should have defined',
    inject([TestService], (service: TestService) => {
      expect(service).toBeTruthy();
    })
  );

  // it('should return top tests order by number of attempts',
  //   async(() => {
  //   })
  // );
});
