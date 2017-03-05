import { Injectable } from '@angular/core';

@Injectable()
export class OrganizationService {

  constructor() { }

  public getOrganizations(): Promise<any> {
    return Promise.resolve([]);
  }

}
