import { Injectable } from '@angular/core';
import { LogService } from './log.service';
import { ApplicationData } from './../providers/application-data';

@Injectable()
export class AboutService {
  constructor(protected logService: LogService,
              protected data: ApplicationData) {
    this.logService.debug(`AboutService.constructor`);
  }

  public get(): any {
    this.logService.debug(`AboutService.getAll`);
    return this.data.getAboutDetail();
  }
}
