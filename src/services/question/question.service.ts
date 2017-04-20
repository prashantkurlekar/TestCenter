import { Injectable } from '@angular/core';
import { Logger, FirebaseBackend } from '../../providers';
import { Question, Category } from '../../models';

@Injectable()
export class QuestionService {

  constructor(public logger: Logger, public backend: FirebaseBackend) { ; }

  public questions(organization: string, category: Category): any {
    this.logger.log(`QuestionService.questions`);
    return this.backend.getQuestions(organization, category);
  }

  public addQuestion(organization: string, category: Category, question: Question): firebase.Promise<any> {
    this.logger.log(`QuestionService.addQuestion`);
    return this.backend.saveQuestion(organization, category, question);
  }

}
