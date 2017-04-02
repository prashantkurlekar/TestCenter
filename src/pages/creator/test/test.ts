import { Component, OnInit } from '@angular/core';
import { NavController, Alert, AlertController, LoadingController, Loading } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Logger, UtilService } from '../../../providers';
import { TestService } from '../../../services';
import { Test } from '../../../models';

@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage implements OnInit {

  public title: string = 'Test';
  public testForm: FormGroup;
  public loading: Loading;
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

  constructor(public navCtrl: NavController, public formBuilder: FormBuilder, public alertController: AlertController,
    public logger: Logger, public testService: TestService, public loadingController: LoadingController) { ; }

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
          Validators.maxLength(50),
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
    const test: Test = {
      name: this.testForm.value.name,
      description: this.testForm.value.description,
    };
    // tslint:disable-next-line:no-unused-variable
    this.testService.createTest('rms-nsw', test).then(value => {
      this.loading.dismiss().then(() => {
        this.showAlert(`New test "${test.name}" added`);
      });
    });

    this.showLoading();
  }

  public onCancel(): void { ; }

  public showAlert(message: any): void {
    let alert: Alert = this.alertController.create({
      title: this.title,
      message: message,
      buttons: [
        {
          text: 'Ok',
          role: 'cancel',
          handler: () => { this.navCtrl.pop(); },
        },
      ],
    });
    alert.present();
  }

  public showLoading(): void {
    this.loading = this.loadingController.create();
    this.loading.present();
  }

}
