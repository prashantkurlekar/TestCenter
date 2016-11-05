import { Injectable } from '@angular/core';
import { Storage }    from '@ionic/storage';

@Injectable()
export class StorageService {

  private storage: Storage;

  public static initStorage(): Storage {
    return new Storage();
  }

  constructor() {
    this.storage = StorageService.initStorage();
  }

  public get(key: string): Promise<{}> {
    return this.storage.get(key);
  }

  public set(key: string, value: string): Promise<{}> {
    return this.storage.set(key, value);
  }

  public remove(key: string): Promise<{}> {
    return this.storage.remove(key);
  }
}
