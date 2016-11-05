/* tslint:disable */

import { TestBed, inject } from '@angular/core/testing';
import { LoggerService } from './logger.service';

describe('Service: Logger', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ LoggerService ]
    });
  });

  // beforeEach(() => {
  //   spyOn(StorageService, 'initStorage').and.returnValue(new StorageMock());
  //   storage = new StorageService();
  //   spyOn(storage['storage'], 'get').and.callThrough();
  //   spyOn(storage['storage'], 'set').and.callThrough();
  //   spyOn(storage['storage'], 'remove').and.callThrough();
  // });

  it('should initialize', inject([LoggerService], (service: LoggerService) => {
    expect(service).toBeTruthy();
  }));

});

/* tslint:enabled */
