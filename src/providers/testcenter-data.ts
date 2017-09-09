import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import * as _ from 'lodash';

@Injectable()
export class TestCenterData {
  private data: any;

  constructor(public http: Http) { }

  public load(): any {
    if (this.data) return Promise.resolve(this.data);
    return new Promise(resolve => this.http.get('assets/data/data.json').subscribe(response => {
      this.data = response.json();
      resolve(this.data);
    }));
  }

  public async getOrganizations() {
    const data = await this.load();
    return data.organizations;
  }

  public async getAssessmentsByOrganization(organizationId: number) {
    const data = await this.load();
    return _.filter(data.assessments, { organizationId: organizationId, active: true });
  }

  public async getTestOptionsByTopic() {
    const data = await this.load();
    return data.testOptions;
  }

  public async getQuestionsByAssessment(topicId: number) {
    const data = await this.load();
    return _.filter(data.questions, { topicIds: [topicId] });
  }

  public async getAboutDetail() {
    const data = await this.load();
    return data.aboutItems;
  }
}
