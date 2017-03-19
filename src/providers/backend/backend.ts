// import { Injectable } from '@angular/core';

// @Injectable()
export abstract class BackendProvider {
  public abstract testPost(value: any): Promise<any>; // { return Promise.resolve(value); };
}
