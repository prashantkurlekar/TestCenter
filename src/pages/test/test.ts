import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController, Platform } from 'ionic-angular';
import { Topic } from '../../models';
import { AssessmentService } from '../../services';

// import { Topic, TestOption, Question, Answer, TestResult } from '../../models';
// import { LogService, TestService } from '../../services';
// import { Utils } from '../../services/utils';
// import { BasePage } from '../base';
// import { TestResultPage } from '../test-result/test-result';

@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {

  public title: string = 'Test';
  public topic: Topic;
  public assessment: any;
  public category: any;
  public questions: Array<any>;
  public currentQuestion: any;
  public questionIndex: number = 0;

  constructor(private navParams: NavParams, private assessmentService: AssessmentService) { }

  public async ionViewWillEnter() {
    console.log('AssessmentDetailsPage.ionViewWillEnter');
    this.extractParams();
    this.questions = await this.getQuestions();
    console.debug(this.questions);
    this.startTest();
  }

  private extractParams() {
    this.assessment = this.navParams.get('assessment');
    this.category = this.navParams.get('category');
    console.debug(this.category);
  }

  private async getQuestions() {
    return this.category ? await this.assessmentService.getQuestionsForAssessmentByCategory(this.assessment, this.category.value) : await this.assessmentService.generateSampleTest(this.assessment);
  }

  private startTest() {
    this.title = this.assessment.name;
    this.nextQuestion();
  }

  private nextQuestion() {
    if (this.questionIndex < this.questions.length) {
      this.currentQuestion = this.questions[this.questionIndex++];
      this.currentQuestion.options = this.assessmentService.shuffleArray(this.currentQuestion.options);
      // this.showNextOption = false;
    } else {
      // this.finishTest();
    }
  }

  public onOptionSelected(question, option) {
    console.debug(question);
    console.debug(option);
  }

  // private selectedOption: TestOption = null;
  // private topic: Topic = null;
  // private questions: Array<Question> = null;
  // private currentQuestionIndex: number = 0;
  // public currentQuestion: Question;
  // public endTestButton: string = 'Home';
  // private showNextOption: boolean = false;

  // constructor(private logService: LogService, private testService: TestService,
  //   public actionSheetCtrl: ActionSheetController, private navController: NavController,
  //   navParams: NavParams, platform: Platform) {
  //   this.logService.debug('TestPage.constructor');
  //   this.extractNavParams(navParams);
  //   this.getQuestionsAndStartTest(this.topic, this.selectedOption);
  // }

  // private extractNavParams(navParams: NavParams): void {
  //   this.selectedOption = navParams.get('option');
  //   this.topic = navParams.get('topic');
  // }

  // private getQuestionsAndStartTest(topic: Topic, option: TestOption): void {
  //   this.logService.debug(`TestPage.getQuestions ${option.tag}`);
  //   this.endTestButton = 'Home';
  //   if (option.tag === 'all') {
  //     this.testOptionAll(topic, option);
  //   } else if (option.tag === 'category') {
  //     this.testOptionCategory(topic, option);
  //   } else {
  //     this.endTestButton = 'Finish';
  //     this.testOptionSample(topic, option);
  //   }
  // }

  // private testOptionAll(topic: Topic, option: TestOption): void {
  //   this.logService.debug(`TestPage.testOptionAll`);
  //   this.testService.getQuestionsByTopicAndOption(topic, option).then(questions => {
  //     this.shuffleQuestionsAndStartTest(questions);
  //   });
  // }

  // private testOptionCategory(topic: Topic, option: TestOption): void {
  //   this.logService.debug(`TestPage.testOptionCategory`);
  //   this.testService.getQuestionsByTopicAndCategory(topic, option).then(questions => {
  //     this.shuffleQuestionsAndStartTest(questions);
  //   });
  // }

  // private testOptionSample(topic: Topic, option: TestOption): void {
  //   this.logService.debug(`TestPage.testOptionSample`);
  //   this.testService.generateSampleTest(topic).then(questions => {
  //     this.shuffleQuestionsAndStartTest(questions);
  //   });
  // }

  // private shuffleQuestionsAndStartTest(questions: Array<Question>): void {
  //   this.questions = Utils.shuffle(questions);
  //   this.start();
  // }

  // private start(): void {
  //   this.logService.debug(`TestPage.start: ${this.topic.name}`);
  //   this.title = this.topic.name;
  //   this.nextQuestion();
  // }

  // private nextQuestion(): void {
  //   this.logService.debug(`TestPage.nextQuestion`);
  //   if (this.currentQuestionIndex < this.questions.length) {
  //     this.currentQuestion = this.questions[this.currentQuestionIndex++];
  //     this.currentQuestion.options = Utils.shuffle(this.currentQuestion.options);
  //     this.showNextOption = false;
  //   } else {
  //     this.finishTest();
  //   }
  // }

  // public itemSelected(question: Question, answer: Answer): void {
  //   this.logService.info(`TestPage.itemSelected(answer: ${answer}`);
  //   question.options.forEach(option => option.selected = false);
  //   answer.selected = !answer.isCorrect ? true : false;
  //   // if (answer.isCorrect) this.nextQuestion();
  //   this.showNextOption = true;
  // }

  // public confirmFinish(): void {
  //   if (this.selectedOption.tag === 'sample') {
  //     this.actionSheetCtrl.create({
  //       title: 'Are you sure, you want to finish test?',
  //       buttons: [
  //         {
  //           text: 'Yes',
  //           handler: (): void => {
  //             this.logService.log('TestPage.openConfirmActionSheet() => Yes');
  //             this.finishTest();
  //           },
  //         }, {
  //           text: 'Cancel',
  //           role: 'cancel',
  //           handler: (): void => {
  //             this.logService.log('TestPage.openConfirmActionSheet() => Cancel');
  //           },
  //         },
  //       ],
  //     }).present();
  //   } else {
  //     this.logService.debug(`TestPage.finishTest: popToRoot`);
  //     this.navController.popToRoot();
  //   }
  // }

  // private finishTest(): void {
  //   this.logService.debug(`TestPage.finishTest`);
  //   if (this.selectedOption.tag === 'sample') {
  //     this.saveResult().then(testResult => {
  //       this.showTestResult(testResult);
  //     });
  //   } else {
  //     this.logService.debug(`TestPage.finishTest: popToRoot`);
  //     this.navController.popToRoot();
  //   }
  // }

  // private saveResult(): Promise<TestResult> {
  //   this.logService.debug(`TestPage.saveResult`);
  //   return this.testService.saveResult(this.topic, this.questions).then(testResult => {
  //     return testResult;
  //   });
  // }

  // public showTestResult(testResult: TestResult): void {
  //   this.logService.debug(`TestPage.showTestResult`);
  //   this.navController.push(TestResultPage, { testResult: testResult, previousPage: 'TestPage' });
  // }
}
