import { Injectable } from '@angular/core';
import { Logger, FirebaseBackend } from '../../providers';

@Injectable()
export class TestService {

  constructor(public logger: Logger, public backend: FirebaseBackend) { ; }

  public testList(organization: string): any {
    this.logger.log(`TestService.testList`);
    return this.backend.getTests(organization);
  }

  public createTest(organization: string, test: any): firebase.Promise<any> {
    this.logger.log(`TestService.createTest`);
    return this.backend.saveTest(organization, test);
  }

}
