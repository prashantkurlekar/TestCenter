import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UtilService, Logger } from '../../../providers';

@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage implements OnInit {

  public title: string = 'Test';
  public testForm: FormGroup;
  public formErrors: any = {};
  public validationMessages: any = {};

  constructor(public navCtrl: NavController, public formBuilder: FormBuilder, public logger: Logger) { ; }

  public ionViewDidEnter(): void {
    this.logger.log(`LoginPage.ionViewDidEnter`);
    this.logger.trackView(this.title);
  }

  public ngOnInit(): void {
    this.buildForm();
  }

  private buildForm(): void {
    this.testForm = this.formBuilder.group({
      name: [
        '',
        Validators.compose([
          Validators.required,
          Validators.maxLength(16),
        ]),
      ],
      description: [
        '',
        Validators.compose([
          Validators.required,
          Validators.maxLength(80),
        ]),
      ],
    });
    UtilService.onFormValueChanged(this.testForm, this.formErrors, this.validationMessages);
  }

  // public ionViewDidLoad(): void {
  //   console.log('ionViewDidLoad TestPage');
  // }

}
