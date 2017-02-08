// /* tslint:disable:no-unused-variable */

// import { TestBed, async, inject } from '@angular/core/testing';
// import { MockBackend, MockConnection } from '@angular/http/testing';
// import { BaseRequestOptions, Http, Response, ResponseOptions } from '@angular/http';
// import { SafeHttp, NetworkService } from './safe-http';
// import { NavController } from 'ionic-angular';

// describe('Service: SafeHttp', () => {

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       providers: [
//         MockBackend, BaseRequestOptions,
//         {
//           provide: Http, useFactory: (mockBackend: MockBackend, options: BaseRequestOptions) => {
//           return new Http(mockBackend, options);
//         }, deps: [MockBackend, BaseRequestOptions] },
//         NetworkService,
//       ],
//     });
//   });

//   it('should initialize', inject([SafeHttp], (service: SafeHttp) => {
//     expect(service).toBeTruthy();
//   }));
// });
