import { Component } from '@angular/core';
import { AboutService } from '../../services';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {
  public aboutItems: any = null;

  constructor(private aboutService: AboutService) { }

  public async ionViewDidLoad() {
    this.aboutItems = await this.aboutService.details();
  }
}
