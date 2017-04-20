import { Component } from '@angular/core';
import { NavController, NavParams, Loading, LoadingController, AlertController, Alert } from 'ionic-angular';
import { QuestionService, CategoryService } from '../../../services';
import { Logger } from '../../../providers';
import { Question } from '../../../models/question';
import { IonicPage } from 'ionic-angular';
import { Category } from '../../../models';

@IonicPage()
@Component({
  selector: 'page-questions',
  templateUrl: 'questions.html',
})
export class QuestionsPage {

  public title: string = 'Questions';
  public categories: any;
  public questions: any;
  public loading: Loading;
  public organization: string = 'rms-nsw';

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public logger: Logger, public questionService: QuestionService, public categoryService: CategoryService,
    public loadingController: LoadingController, public alertController: AlertController) { }

  public ngOnInit(): void {
    this.logger.log(`QuestionsPage.ngOnInit`);
    this.getCategories();
    // this.getQuestions();
  }

  public getCategories(): void {
    this.categoryService.categories(`rms-nsw`).on('value', snapshot => {
      let rawList: any = [];
      snapshot.forEach(snap => {
        rawList.push({
          id: snap.key,
          value: snap.val().value,
        });
        return false;
      });
      this.categories = rawList;
      this.loading.dismiss();
    });
    this.showLoading();
  }

  public getQuestions(category: Category): any {
    this.logger.log(category.value);
    this.questionService.questions(`rms-nsw`, category).on('value', snapshot => {
      let rawList: any = [];
      snapshot.forEach(snap => {
        rawList.push({
          id: snap.key,
          value: snap.val().value,
        });
        return false;
      });
      console.info(rawList);
      this.questions = rawList;
      this.loading.dismiss();
      // return rawList;
    });
    // this.showLoading();
  }

  public ionViewDidLoad(): void {
    console.log('QuestionsPage.ionViewDidLoad');
  }

  public showLoading(): void {
    this.loading = this.loadingController.create({ dismissOnPageChange: true });
    this.loading.present();
  }

  public add(): void {
    this.logger.log(this.categories[1].value);
    let prompt: Alert = this.alertController.create({
      title: 'Question',
      message: 'Enter a question',
      inputs: [
        {
          name: 'value',
          placeholder: 'Category',
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          // tslint:disable-next-line:no-unused-variable
          handler: (data) => {
            console.log('Cancel clicked');
          },
        }, {
          text: 'Save',
          handler: data => {
            const question: Question = {
              // category: '',
              value: data.value,
              answers: [],
              correctAnswers: [],
            };
            console.log(question);
            this.questionService.addQuestion(this.organization, this.categories[1], question);
          },
        },
      ],
    });
    prompt.present();
  }

  public goToQuestion(question: Question): void {
    this.logger.log(question);
  }

}
