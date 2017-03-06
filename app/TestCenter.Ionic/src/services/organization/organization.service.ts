import { Injectable } from '@angular/core';
import { FirebaseBackendService } from '../../providers/firebase/firebase-backend.service';

@Injectable()
export class OrganizationService {

  constructor(public backend: FirebaseBackendService) { ; }

  public getOrganizations(): Promise<any> {
    return this.backend.getOrganizations();
  }

}
