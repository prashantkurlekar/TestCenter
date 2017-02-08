import { Assessment } from './../../../models';
import { Logger } from './../../../providers/logger';
import { AssessmentService } from './../../../services/assessment/assessment.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NavController, NavParams } from 'ionic-angular';
import { Utils } from './../../../providers';
import { AddQuestionPage } from './../';

@Component({
  selector: 'page-manageassessment',
  templateUrl: 'manage.html'
})
export class ManageAssessmentPage implements OnInit {

  public title: string;
  public assessmentForm: FormGroup;
  public assessment: Assessment;
  public formErrors = {
    name: '',
    shortName: '',
    description: '',
    categories: '',
  };
  public validationMessages = {
    name: {
      required: 'Name is required.',
      maxlength: 'Name cannot be more than 50 characters.',
    },
    shortName: {
      required: 'Short name is required.',
      maxlength: 'Short name cannot be more than 10 characters long.',
    },
    description: {
      required: 'Description is required.',
      maxlength: 'Description cannot be more than 100 characters long.',
    },
    categories: {
      required: 'Categories is required.',
    },
  };

  constructor(public navController: NavController, public navParams: NavParams,
    private formBuilder: FormBuilder, public assessmentService: AssessmentService, public logger: Logger) {
    this.logger.log(`ManageAssessmentPage.constructor`);
  }

  public ionViewDidLoad() {
    console.log('ionViewDidLoad AssessmentPage');
  }

  public ngOnInit() {
    this.logger.log(`ManageAssessmentPage.ngOnInit`);
    this.title = 'Assessment';
    this.assessmentForm = this.createFormGroup();
  }

  private createFormGroup(): FormGroup {
    let formGroup = new FormGroup({
      name: new FormControl('Prashant',
        Validators.compose([
          Validators.required,
          Validators.maxLength(50)])),
      shortName: new FormControl('PK',
        Validators.compose([
          Validators.required,
          Validators.maxLength(10)])),
      description: new FormControl('Prashant Kurlekar',
        Validators.compose([
          Validators.required,
          Validators.maxLength(100)])),
      categories: new FormControl(['cat1'],
        Validators.compose([Validators.required])),
    });
    formGroup.valueChanges.subscribe(() => Utils.onFormValueChanged(formGroup, this.formErrors, this.validationMessages));
    return formGroup;
  }

  public onSubmit(): void {
    this.logger.log(`ManageAssessmentPage.onSubmit`);
    this.assessment = this.extractAssessmentDetails();
    this.assessmentService.createAssessment(this.assessment)
      .then(assessment => {
        this.assessment = assessment;
        this.navController.push(AddQuestionPage, { assessment: assessment });
      }).catch(error => {
        this.logger.error(error);
        this.logger.handleError(error);
      });
  }

  private extractAssessmentDetails(): Assessment {
    return new Assessment(
      this.assessmentForm.value.name,
      this.assessmentForm.value.shortName,
      this.assessmentForm.value.description,
      this.assessmentForm.value.categories,
    );
  }

}
