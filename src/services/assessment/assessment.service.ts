import { Injectable } from '@angular/core';
import { TestCenterData } from '../../providers/testcenter-data';

@Injectable()
export class AssessmentService {

  public NSWRTA = 2;

  constructor(private testcenterData: TestCenterData) { }

  public async getAssessments() {
    return await this.testcenterData.getTopicsByOrganization(this.NSWRTA);
  }

}
