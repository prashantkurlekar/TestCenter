import { Injectable } from '@angular/core';
import { FirebaseBackendService } from '../../providers/firebase/firebase-backend.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class OrganizationService {

  constructor(public backend: FirebaseBackendService) { ; }

  public getOrganizations(): Observable<any> {
    return this.backend.getOrganizations();
  }

  public addOrganization(organization): void {
    return this.backend.addOrganization(organization);
  }

}
