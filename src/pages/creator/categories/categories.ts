import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, LoadingController, Loading, AlertController, Alert } from 'ionic-angular';
import { CategoryService } from '../../../services';
import { Logger } from '../../../providers';
import { Category } from '../../../models';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html',
})
export class CategoriesPage implements OnInit {

  public categories: any;
  public loading: Loading;
  public organization: string = 'rms-nsw';

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public categoryService: CategoryService, public logger: Logger,
    public loadingController: LoadingController, public alertController: AlertController) { }

  public ngOnInit(): void {
    this.logger.log(`TestsPage.ngOnInit`);
    this.getCategories();
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

  public ionViewDidLoad(): void {
    console.log('CategoriesPage.ionViewDidLoad');
  }

  public showLoading(): void {
    this.loading = this.loadingController.create({ dismissOnPageChange: true });
    this.loading.present();
  }

  public add(): void {
    let prompt: Alert = this.alertController.create({
      title: 'Category',
      message: 'Enter a category',
      inputs: [
        {
          name: 'category',
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
            const category: Category = {
              value: data.category,
            };
            this.categoryService.createCategory(this.organization, category);
          },
        },
      ],
    });
    prompt.present();
  }

}
