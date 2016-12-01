/* tslint:disable */

import { TestBed, inject } from '@angular/core/testing';
import { LoggerService } from './logger.service';
import { AlertController, App, Config, Platform } from 'ionic-angular';

describe('Service: Logger', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LoggerService, AlertController,  App, Config, Platform,
      ]
    });
  });

  it('should initialize', inject([LoggerService], (loggerService: LoggerService) => {
    expect(loggerService).toBeTruthy();
  }));

  it('should call log', inject([LoggerService], (loggerService: LoggerService) => {
    spyOn(console, 'log').and.callThrough();

    loggerService.log('message to log');

    expect(console.log).toHaveBeenCalled();
  }));

  it('should call error', inject([LoggerService], (loggerService: LoggerService) => {
    spyOn(console, 'error').and.callThrough();

    loggerService.error('message to error');

    expect(console.error).toHaveBeenCalled();
  }));

  it('should call info', inject([LoggerService], (loggerService: LoggerService) => {
    spyOn(console, 'info').and.callThrough();

    loggerService.info('message to info');

    expect(console.info).toHaveBeenCalled();
  }));

});

/* tslint:enabled */
