import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { OrganizationService } from '../../../services/organization/organization.service';
import { Organization } from '../../../models/organization';

@IonicPage()
@Component({
  selector: 'page-organizations',
  templateUrl: 'organizations.html',
})
export class OrganizationsPage {

  public organizations: any;
  public name: string;

  constructor(private organizationService: OrganizationService, private navController: NavController) { ; }

  public async ionViewDidLoad() {
    console.log('OrganizationsPage.ionViewDidLoad');
    this.organizations = await this.organizationService.getOrganizations();
  }

  public async addOrganization() {
    const org: Organization = {
      name: this.name,
    };
    let result = await this.organizationService.addOrganization(org);
    console.debug(result);
    this.name = '';
  }

  public async removeOrganization(key: any) {
    let result = await this.organizationService.removeOrganization(key);
    console.debug(result);
  }

  public onOrganization(organization) {
    console.debug(organization);
    this.navController.push('TestsPage', { organization: organization });
  }

}
