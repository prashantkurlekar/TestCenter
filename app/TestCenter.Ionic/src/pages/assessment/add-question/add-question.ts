import { Assessment } from './../../../models';
import { FormGroup, Validators, FormControl, FormBuilder, FormArray } from '@angular/forms';
import { Logger } from './../../../providers/logger';
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Utils } from './../../../providers';

@Component({
  selector: 'page-add-question',
  templateUrl: 'add-question.html',
})
export class AddQuestionPage implements OnInit {

  public title: string;
  public assessment: Assessment;
  public addQuestionForm: FormGroup;
  public formErrors: any = {
    value: '',
    answers: '',
    correctAnswersIds: '',
  };
  public validationMessages: any = {
    value: {
      required: 'Question is required',
      maxlength: 'Maximum 1000 characters allowed',
    },
    answers: {
      required: 'Minimum two answers required',
    },
    correctAnswersIds: {
      required: 'Select at least one correct answer',
    }
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, public logger: Logger,
    public formBuilder: FormBuilder) { }

  public ionViewDidLoad() {
    this.logger.log(`AddQuestionPage.ionViewDidLoad`);
    this.extractParams();
  }

  private extractParams(): void {
    this.assessment = this.navParams.get('assessment');
    this.title = this.assessment.shortName;
    this.logger.debug(this.assessment);
  }

  public ngOnInit() {
    this.logger.log(`ManageAssessmentPage.ngOnInit`);
    this.addQuestionForm = this.createFormGroup();
  }

  private createFormGroup(): FormGroup {
    let formGroup = new FormGroup({
      value: new FormControl('',
        Validators.compose([
          Validators.required,
          Validators.maxLength(1000)
        ])),
      answers: this.formBuilder.array([
        this.initAnswers(),
      ]),
      correctAnswersIds: new FormControl([], Validators.compose([Validators.required])),
    });
    formGroup.valueChanges.subscribe(() => Utils.onFormValueChanged(formGroup, this.formErrors, this.validationMessages));
    return formGroup;
  }

  private initAnswers(): any {
    return this.formBuilder.group({
      answer: ['', Validators.required],
    });
  }

  public addAnswer() {
    const control = <FormArray>this.addQuestionForm.controls['answers'];
    control.push(this.initAnswers());
  }

  removeAnswer(index: number) {
    const control = <FormArray>this.addQuestionForm.controls['answers'];
    control.removeAt(index);
  }

  public onSubmit(): void { ; }

}
