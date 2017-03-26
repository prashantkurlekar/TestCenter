import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UtilService, Logger } from '../../../providers';
import { TestService } from '../../../services';

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

  constructor(public navCtrl: NavController, public formBuilder: FormBuilder,
    public logger: Logger, public testService: TestService) { ; }

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

  public onSave(): void {
    this.logger.info(`TestPage.onSave`);
    const test: any = {
      name: this.testForm.value.name,
      description: this.testForm.value.description,
    };
    this.testService.createTest(test).then(value => {
      this.logger.info(value);
    });
  }

  public onCancel(): void { ; }

}
