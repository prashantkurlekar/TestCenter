import { Injectable } from '@angular/core';
import { TestCenterData } from '../../providers/testcenter-data';
import * as _ from 'lodash';
import { Topic } from '../../models';

@Injectable()
export class AssessmentService {

  public NSWRTA = 2;

  constructor(private testcenterData: TestCenterData) { }

  public async getAssessments() {
    return await this.testcenterData.getAssessmentsByOrganization(this.NSWRTA);
  }

  public async generateSampleTest(topic: Topic) {
    let testQuestions: Array<any> = [];
    const topicQuestions = await this.testcenterData.getQuestionsByAssessment(topic.id);
    topic.categories.forEach(category => {
      const questionsForCategory = this.shuffleArray(_.filter(topicQuestions, { 'category': category.value })).slice(0, category.numberOfQuestions);
      testQuestions = testQuestions.concat(questionsForCategory);
    });
    return testQuestions;
  }

  public async getQuestionsForAssessmentByCategory(topic: Topic, category: string) {
    console.debug('AssessmentService.getQuestionsForAssessmentByCategory');
    const questions = await this.testcenterData.getQuestionsByAssessment(topic.id);
    console.log(questions);
    console.log(category);
    return _.filter(questions, { 'category': category });
  }

  public shuffleArray(arrayToShuffle: Array<any>): Array<any> {
    let i: number = 0, j: number = 0;
    let temp: any = null;

    for (i = arrayToShuffle.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1));
      temp = arrayToShuffle[i];
      arrayToShuffle[i] = arrayToShuffle[j];
      arrayToShuffle[j] = temp;
    }
    return arrayToShuffle;
  }

}
