import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Organization } from '../../models/organization';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FirebaseBackendService {

  public organizations: FirebaseListObservable<any>;

  constructor(public angularFire: AngularFire) {
    this.organizations = angularFire.database.list('/organizations');
  }

  public getOrganizations(): FirebaseListObservable<any> {
    return this.organizations;
  }

  public addOrganization(organization: Organization): any {
    return this.organizations.push(organization);
  }

}
