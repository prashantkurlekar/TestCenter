import { TestBed, inject } from '@angular/core/testing';
import { TestService } from './test.service';
import { Logger, SafeHttp, NetworkService } from '../../providers';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions, Http, ResponseOptions, Response } from '@angular/http';
import { Platform } from 'ionic-angular';
import { BackendProvider } from '../../providers';
import { BackendProviderMock } from '../../mocks';

describe('Service: TestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        Platform,
        MockBackend, BaseRequestOptions,
        {
          provide: Http, useFactory: (mockBackend: MockBackend, options: BaseRequestOptions) => {
            return new Http(mockBackend, options);
          }, deps: [MockBackend, BaseRequestOptions],
        },
        SafeHttp, NetworkService, Logger,
        BackendProviderMock,
        { provide: BackendProvider, useClass: BackendProviderMock },
        TestService,
      ],
    });
  });

  it('should initialize', inject([TestService], (service: TestService) => {
    expect(service).toBeDefined();
  }));

  it('should save test', inject([TestService, MockBackend], (testService: TestService, backend: MockBackend) => {
    backend.connections.subscribe((connection: MockConnection) => {
      const responseOptions: ResponseOptions = new ResponseOptions({ body: { Status: 'Success' } });
      connection.mockRespond(new Response(responseOptions));
    });

    const newTest: any = {
      name: 'new test',
      description: 'test description',
    };

    testService.post(newTest).then(response => {
      expect(response).toBeDefined();
    });
  }));

});
