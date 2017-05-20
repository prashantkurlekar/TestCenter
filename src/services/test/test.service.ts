import { Injectable } from '@angular/core';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class TestService {

  private testsNode: string = '/tests';

  constructor(private angularFireDb: AngularFireDatabase) { }

  public getTests(orgKey: any): FirebaseListObservable<any> {
    return this.angularFireDb.list(`${this.testsNode}/${orgKey}`);
  }

  public addTest(orgKey: any, test: any): any {
    return this.angularFireDb.list(`${this.testsNode}/${orgKey}`).push(test);
  }

  public removeTest(orgKey: any, testKey: any): any {
    return this.angularFireDb.list(`${this.testsNode}/${orgKey}`).remove(testKey);
  }
}
