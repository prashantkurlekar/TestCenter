/* tslint:disable */

import { TestBed, inject } from '@angular/core/testing';
import { LoggerService } from './logger.service';

describe('Service: Logger', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoggerService]
    });
  });

  it('should initialize', inject([LoggerService], (loggerService: LoggerService) => {
    expect(loggerService).toBeTruthy();
  }));

  it('should call log', inject([LoggerService], () => {
    spyOn(console, 'log').and.callThrough();

    LoggerService.log('message to log');

    expect(console.log).toHaveBeenCalled();
  }));

  it('should call error', inject([LoggerService], () => {
    spyOn(console, 'error').and.callThrough();

    LoggerService.error('message to error');

    expect(console.error).toHaveBeenCalled();
  }));

  it('should call info', inject([LoggerService], () => {
    spyOn(console, 'info').and.callThrough();

    LoggerService.info('message to info');

    expect(console.info).toHaveBeenCalled();
  }));

});

/* tslint:enabled */
