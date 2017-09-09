import { Injectable } from '@angular/core';
import { TestCenterData } from '../../providers/testcenter-data';

@Injectable()
export class AboutService {
  constructor(protected testcenterData: TestCenterData) { }

  public async details() {
    return await this.testcenterData.getAboutDetail();
  }
}
