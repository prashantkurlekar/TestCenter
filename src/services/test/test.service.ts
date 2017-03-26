import { Injectable } from '@angular/core';
import { Logger } from '../../providers';
import { BackendProvider } from '../../providers';

@Injectable()
export class TestService {

  constructor(public logger: Logger, public backend: BackendProvider) { ; }

  public createTest(test: any): Promise<any> {
    return this.backend.testPost(test);
  }

}
