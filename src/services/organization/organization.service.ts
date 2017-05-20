import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class OrganizationService {

  private organizationNode: string = '/organizations';

  constructor(private angularFireDb: AngularFireDatabase) { }

  public getOrganizations(): FirebaseListObservable<any> {
    return this.angularFireDb.list(this.organizationNode);
  }

  public addOrganization(organization): any {
    return this.angularFireDb.list(this.organizationNode).push(organization);
  }

  public removeOrganization(key: any): any {
    return this.angularFireDb.list(this.organizationNode).remove(key);
  }

}
