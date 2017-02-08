import { BasePage } from './../../base';
import { LoggerService } from './../../../services';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'page-assessment',
  templateUrl: './assessment.html',
})
export class AssessmentPage implements BasePage {
  public title: string;
  public assessmentForm: FormGroup;
  public formValid: boolean = false;

  constructor(public navCtrl: NavController, public formBuilder: FormBuilder,
    public loggerService: LoggerService) {
    this.title = 'Assessment';
    this.buildForm();
  }

  private buildForm(): void {
    this.assessmentForm = this.formBuilder.group({
      'name': ['', Validators.required],
      'shortName': ['', Validators.required],
      'description': [''],
      'category': ['', Validators.required],
    });

    this.assessmentForm.valueChanges.subscribe(() => {
      this.formValid = this.assessmentForm.valid;
    });
  }
}
