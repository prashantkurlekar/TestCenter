import { Injectable } from '@angular/core';
import { BackendProvider } from './backend';
import { Storage } from '@ionic/storage';

@Injectable()
export class FirebaseBackendProvider implements BackendProvider {

  constructor(public storage: Storage) { ; }

  public testPost(value: any): Promise<any> {
    return this.storage.set('test', value);
  }

}
