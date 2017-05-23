import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class QuestionService {

  private questionNode: string = '/questions';

  constructor(private angularFireDb: AngularFireDatabase) { }

  public getQuestions(orgKey: any): FirebaseListObservable<any> {
    return this.angularFireDb.list(`${this.questionNode}/${orgKey}`);
  }

  public addQuestion(orgKey: any, question: any): any {
    return this.angularFireDb.list(`${this.questionNode}/${orgKey}`).push(question);
  }

  public removeQuestion(orgKey: any, questionKey: any): any {
    return this.angularFireDb.list(`${this.questionNode}/${orgKey}`).remove(questionKey);
  }

}
