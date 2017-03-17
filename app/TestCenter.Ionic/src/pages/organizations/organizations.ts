import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { OrganizationService } from '../../services';
import { Organization } from '../../models/organization';

@Component({
  selector: 'page-organizations',
  templateUrl: 'organizations.html',
})
export class OrganizationsPage {

  public organizations: any;

  constructor(public navCtrl: NavController, public organizationService: OrganizationService) { ; }

  public ionViewDidLoad() {
    this.organizations = this.organizationService.getOrganizations();
  }

  public onSelect(organization: any): void {
    console.log(organization);
  }

  public onAdd(): void {
    this.organizationService.addOrganization(new Organization(Date.now().toString()));
  }
}
