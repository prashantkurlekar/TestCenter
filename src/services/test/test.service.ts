import { Injectable } from '@angular/core';

@Injectable()
export class TestService {

  // tslint:disable-next-line:no-empty
  constructor() { }

  public getTests(): Promise<any> {
    return Promise.resolve({});
  }

}
