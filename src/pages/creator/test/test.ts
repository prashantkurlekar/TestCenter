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
  public formErrors: any = {
    name: '',
    description: '',
  };
  public validationMessages: any = {
    name: {
      required: 'Name is required',
      maxlength: 'Name should be maximum of 16 characters',
    },
    description: {
      required: 'Description is required',
      maxlength: 'Description should be maximum of 80 characters',
    },
  };

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

  public onSave(): void { ; }

  public onCancel(): void { ; }

  // public ionViewDidLoad(): void {
  //   console.log('ionViewDidLoad TestPage');
  // }

}
