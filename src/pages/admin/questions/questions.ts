import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { QuestionService } from '../../../services/question/question.service';

@IonicPage()
@Component({
  selector: 'page-questions',
  templateUrl: 'questions.html',
})
export class QuestionsPage {

  public title: string = 'Questions';
  public organization: any;
  public questions: any;
  public value: string;

  constructor(private navParams: NavParams, private questionService: QuestionService) {
    this.organization = navParams.get('organization') || {};
    this.title = this.organization.name;
  }

  public async ionViewDidLoad() {
    console.log('QuestionsPage.ionViewDidLoad');
    this.questions = await this.questionService.getQuestions(this.organization.$key);
  }

  public async add() {
    await this.questionService.addQuestion(this.organization.$key, {
      value: this.value,
    });
    this.value = '';
  }

  public async remove(key: any) {
    await this.questionService.removeQuestion(this.organization.$key, key);
  }

}
