import { TestBed, inject } from '@angular/core/testing';
import { Logger } from './logger';
import { BaseRequestOptions, Http } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { PlatformMock } from '../../mocks';
import { Platform } from 'ionic-angular';
import { GoogleAnalytics } from "@ionic-native/google-analytics";

describe('Provider: Logger', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        Logger,
        MockBackend, BaseRequestOptions,
        {
          provide: Http, useFactory: (mockBackend: MockBackend, options: BaseRequestOptions) => {
            return new Http(mockBackend, options);
          }, deps: [MockBackend, BaseRequestOptions],
        },
        { provide: Platform, useClass: PlatformMock },
        GoogleAnalytics,
      ],
    });
  });

  it('should initialize', inject([Logger], (service: Logger) => {
    expect(service).toBeTruthy();
  }));

  // it('should initialize',
  //   inject([LoggerService], (service: LoggerService) => {
  //     expect(service).toBeTruthy();
  //   }),
  // );

});
