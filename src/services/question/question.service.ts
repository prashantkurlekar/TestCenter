import { Injectable } from '@angular/core';
import { Logger, FirebaseBackend } from '../../providers';

@Injectable()
export class QuestionService {

  constructor(public logger: Logger, public backend: FirebaseBackend) { ; }

  public categories(organization: string): any {
    this.logger.log(`CategoryService.categories`);
    return this.backend.questions(organization);
  }

  public createCategory(organization: string, question: any): firebase.Promise<any> {
    this.logger.log(`CategoryService.createCategory`);
    return this.backend.saveQuestion(organization, question);
  }

}
